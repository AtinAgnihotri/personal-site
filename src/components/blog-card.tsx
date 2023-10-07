import { Doc } from "contentlayer/generated";
import { FC } from "react";
import { Card } from "./ui/card";
import Image from "next/image";
import Link from "next/link";

type TBlogCard = {
  doc: Doc;
};

const getFormattedPublishingDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BlogCard: FC<TBlogCard> = ({ doc }) => {
  const { imageUrl, title, publishedAt, description, slug } = doc;

  return (
    <Link href={`/blog/${slug}`}>
      <Card className="my-4 w-full bg-transparent p-2 text-white md:my-8">
        <div className="flex flex-row">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${title} image`}
              width={300}
              height={300}
              objectFit="contain"
              className="mr-4 rounded-xl border border-white"
            />
          )}
          <div className="flex flex-grow flex-col justify-center">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-xl font-bold md:text-4xl">{title}</h1>
              <h3>{getFormattedPublishingDate(publishedAt)}</h3>
            </div>
            <h2 className="pt-4 text-lg font-semibold md:text-xl">
              {description}
            </h2>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;
