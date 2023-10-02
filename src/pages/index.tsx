import Head from "next/head";
import Link from "next/link";
import AboutSection from "~/components/about-section";
import HeroSection from "~/components/hero-section";

export default function Home() {
  return (
    <div className="flex-grow flex-col place-content-between place-items-stretch  ">
      <HeroSection className="mt-8  lg:mx-24 xl:mx-48" />
      <AboutSection className="mt-16  md:mt-24 lg:mx-24 xl:mx-48" />
    </div>
  );
}
