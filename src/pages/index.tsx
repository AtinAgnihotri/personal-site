import Head from "next/head";
import Link from "next/link";
import HeroSection from "~/components/hero-section";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      {/* <main className="mx-auto flex min-h-screen flex-col bg-black px-12 py-8"> */}
      {/* <br />
        <br />
        <br /> */}
      <HeroSection className="mt-8 lg:mx-24 xl:mx-48" />
      {/* <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection />
        <HeroSection /> */}
      {/* </main> */}
    </>
  );
}

// items-center justify-center
// bg-gradient-to-b from-[#151345] to-[#15162c]
