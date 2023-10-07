import { type Doc, allDocs } from "contentlayer/generated";
import type { GetStaticProps, NextPage } from "next";
import { notFound } from "next/navigation";
import { Mdx } from "~/components/mdx";

type PageProps = { slug: string; doc: Doc };

const BlogPage: NextPage<PageProps> = ({ doc }) => {
  return (
    <div>
      <Mdx code={doc.body.code} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = (context) => {
  const slug = context.params?.slug;
  if (typeof slug !== "string") throw new Error("no slug");

  const doc = allDocs.find((doc) => doc.slugAsParams === slug);
  if (!doc) {
    notFound();
  }

  return {
    props: {
      doc,
      slug,
    },
  };
};

export const getStaticPaths = () => {
  return { paths: [], fallback: "blocking" };
};

export default BlogPage;
