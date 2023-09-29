import { cn } from "~/lib/utils";

type TComingSoon = Partial<HTMLDivElement>;

const ComingSoon: React.FC<TComingSoon> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center p-8",
        className,
      )}
    >
      <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        Coming Soon
      </h1>
    </div>
  );
};

export default ComingSoon;
