import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath,
  },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      required: true,
      type: "string",
    },
    description: {
      required: true,
      type: "string",
    },
    publishedAt: {
      required: true,
      type: "date",
    },
    published: {
      required: true,
      type: "boolean",
    },
    imageUrl: {
      required: false,
      type: "string",
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        rehypePrettyCode,
        {
          theme: "github-dark",
          /**
           * @param {{ children: string | any[]; }} node
           */
          onVisitLine(node) {
            // Prevent lines from collapsing in display:grid mode and allow
            // empty lines to be copy pasted
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          /**
           * @param {{ properties: { className: string[]; }; }} node
           */
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheader-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
