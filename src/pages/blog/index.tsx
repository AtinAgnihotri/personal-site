import { GetStaticProps, NextPage } from "next";
import { Doc, allDocs } from "contentlayer/generated";
import BlogCard from "~/components/blog-card";

type TBlogList = {
  allDocs: Doc[];
};

const BlogPage: NextPage<TBlogList> = ({ allDocs }) => {
  return (
    <div className="px-4 pt-8 text-white md:p-12">
      <h1 className="break-words py-4 text-4xl font-black md:text-5xl lg:text-6xl">Latest in my ramblings:</h1>
      {allDocs.map((doc) =>
        doc.published ? <BlogCard doc={doc} key={doc.title} /> : null,
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      allDocs,
    },
  };
};

// export const getStaticPaths = () => {
//   return { paths: [], fallback: "blocking" };
// };

export default BlogPage;
