// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// import { Card } from "./ui/ui/card";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import { cn } from "~/lib/utils";

const TypingSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Trying to center a div",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Trying to send out a PN",
        1000,
        "Trying to juggle my docker images",
        1000,
        "Trying to wrestle with Go mutexes",
        1000,
        "Trying to blog, or at least a snarky tweet",
        1000,
        "Trying to stay on topic",
        1000,
      ]}
      wrapper="span"
      speed={50}
      //   style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

type THeroSection = Partial<HTMLDivElement>;

const HeroSection: React.FC<THeroSection> = ({ className }) => {
  return (
    <div className={cn("bg-black p-4", className)}>
      <div className="flex w-full  flex-col items-center justify-between gap-4 md:flex-row">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {"Hello, I'm Atin"}
          </h1>

          <p className="text-xl text-slate-300 sm:text-2xl">
            And you can find me
          </p>
          <div className="text-3xl text-slate-300 md:text-4xl">
            <TypingSequence />
          </div>
          <div className="xbg-slate-200 mb-4 mt-4 flex  justify-around gap-3 md:mb-0 md:justify-start">
            <Button variant="default" size="default">
              Hire Me
            </Button>
            <Button>Download CV</Button>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/hero_image.jpg"
            alt="hero image"
            width={300}
            height={300}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
