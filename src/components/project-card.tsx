import { cn } from "~/lib/utils";
import { Button } from "./ui/button";
import { HiCode, HiOutlineEye } from "react-icons/hi";

export type TProjectCard = {
  image?: string;
  cardBackground?: boolean;
  name: string;
  codeLink: string;
  previewLink?: string;
  description: string;
  techUsed: string[];
  bgType?: "contain" | "clip";
};

// type TProjectImage = Pick<TProjectCard, "cardBackground" | "image" | "name" | "codeLink" | "previewLink"> & {
//   className?: string;
// };

type TProjectImage = Omit<TProjectCard, "description" | "techUsed"> & {
  className?: string;
  mobile?: boolean;
};

const ProjectImage: React.FC<TProjectImage> = ({
  cardBackground,
  image,
  name,
  className,
  codeLink,
  previewLink,
  mobile,
  bgType,
}) => {
  return (
    <div
      className={cn(
        "group relative flex h-48 items-center  justify-center overflow-hidden rounded-xl md:h-56",
        className,
      )}
    >
      <div
        className={cn(
          "bottom-0 left-0 right-0 top-0 z-0 flex h-full  items-center justify-center rounded-xl p-4 align-middle text-xl font-semibold text-white md:text-2xl",
          cardBackground ? " bg-gradient-to-b from-[#151345] to-[#15162c]" : "",
          className,
        )}
        style={{
          background: image ? `url(${image})` : undefined,
          backgroundSize: bgType ?? "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {image ? null : (
          <h1 className=" flex h-full items-center justify-center  text-center align-middle ">
            {name}
          </h1>
        )}
      </div>
      {mobile ? null : (
        <div className="overlay absolute bottom-0 left-0 right-0 top-0 z-10  hidden h-full w-full items-center justify-center gap-3 group-hover:flex group-hover:bg-black group-hover:bg-opacity-70">
          <Button
            asChild
            className="hidden rounded-full bg-slate-500 text-2xl text-white md:block"
          >
            <a href={codeLink} target="_blank">
              <HiCode />
            </a>
          </Button>
          <Button
            asChild
            className={`hidden rounded-full bg-slate-500 text-2xl text-white ${
              previewLink ? "md:block" : ""
            }`}
          >
            <a href={previewLink} target="_blank">
              {previewLink ? <HiOutlineEye /> : null}
            </a>
          </Button>
        </div>
      )}
    </div>
  );
};

const ProjectCard: React.FC<TProjectCard> = ({
  image,
  cardBackground,
  name,
  codeLink,
  previewLink,
  techUsed,
  description,
  bgType,
}) => {
  return (
    <div className=" ">
      {/* <div
        className={cn(
          "h-52 rounded-xl md:h-72",
          cardBackground ? " bg-gradient-to-b from-[#151345] to-[#15162c]" : "",
          "",
        )}
        style={{
          background: image ? `url(${image})` : undefined,
          backgroundSize: "cover",
        }}
      /> */}
      <ProjectImage
        cardBackground={cardBackground}
        image={image}
        name={name}
        className="hidden md:block"
        codeLink={codeLink}
        previewLink={previewLink}
        bgType={bgType}
      />
      <a href={codeLink} target="_blank">
        <ProjectImage
          cardBackground={cardBackground}
          image={image}
          name={name}
          className="block md:hidden"
          codeLink={codeLink}
          previewLink={previewLink}
          mobile
          bgType={bgType}
        />
      </a>
      <div className="p-2 text-white">
        <h1 className="text-xl font-bold  sm:text-2xl">{name}</h1>
        <h3 className="text-lg font-medium  sm:text-xl">{description}</h3>
        <p>{techUsed.join(", ")}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
