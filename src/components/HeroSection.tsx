// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// import { Card } from "./ui/ui/card";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";

const TypingSequence = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Development",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Mobile Development",
        1000,
        "Full Stack",
        1000,
        "Blogging",
        1000,
        "Fiction Writing",
        1000,
      ]}
      wrapper="span"
      speed={50}
      //   style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

const HeroSection = () => {
  return (
    <div className="bg-black p-4">
      <div className="flex w-full  flex-col items-center justify-between md:flex-row">
        <div className="col-span-7 place-self-center">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            {"Hello, I'm Atin"}
          </h1>

          <p className="text-lg text-slate-300 sm:text-xl">
            And you can find me doing
          </p>
          <div className="text-2xl text-slate-300">
            <TypingSequence />
          </div>
          <div className="xbg-slate-200 mt-4 flex gap-3">
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
