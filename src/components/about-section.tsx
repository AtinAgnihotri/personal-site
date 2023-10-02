import Image from "next/image";
import { cn } from "~/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

type TAboutSection = Partial<HTMLDivElement>;

type TAboutBlob = {
  mobile?: boolean;
};

const AboutBlob: React.FC<TAboutBlob> = ({ mobile }) => {
  return (
    <div
      className={cn(
        "",
        mobile ? "mt-4 block justify-center md:hidden" : "hidden md:block",
      )}
    >
      <h1 className="text-center text-3xl font-extrabold md:text-start">
        About me
      </h1>
      <p className="flex items-end">
        {"I'm"} a A frontend generalist, working on both web and mobile apps,
        aiming to deliver performant and satisfying experiences on the
        form-factor of {"consumer's"} choosing. I dabble in backend from time to
        time and also work on {"CLI's"} and process improvements to improve the
        DX of the team {"I'm"} part of.
      </p>
    </div>
  );
};

const AboutSection: React.FC<TAboutSection> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-10 text-white  md:flex-row md:items-start md:justify-between",
        className,
      )}
    >
      <AboutBlob mobile />
      <div className="h-[300px] w-[300px]">
        <Image
          src="/images/about_section.jpg"
          alt="about image"
          width={300}
          height={300}
          className="rounded-3xl"
        />
      </div>
      <div className="flex w-[400px] flex-col items-center md:w-[700px]">
        <AboutBlob />
        <Tabs
          defaultValue="account"
          className="mt-10 flex w-[400px] flex-col items-center justify-center  md:mt-8 "
        >
          <TabsList className="w-full gap-10 bg-black">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <div className="flex flex-row gap-10 text-lg  sm:text-xl">
              <ul className="list-disc">
                <li>React</li>
                <li>React Native</li>
                <li>NextJS</li>
                <li>GraphQL</li>
                <li>UIKit</li>
              </ul>
              <ul className="list-disc">
                <li>SQL</li>
                <li>JS/TS</li>
                <li>Go</li>
                <li>Python</li>
                <li>Swift</li>
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="awards">
            <ul className="list-disc">
              <li>
                <h1 className="text-lg  sm:text-xl">Extra-Miler Award</h1>
                <h3 className="pb-2 text-slate-300">
                  Mikros (Formerly Technicolor A&G), May 2019
                </h3>
              </li>
              <li>
                <h1 className="text-lg  sm:text-xl">Best Learner Award</h1>
                <h3 className="text-slate-300">
                  Mikros (Formerly Technicolor A&G), Nov 2019
                </h3>
              </li>
              <li>
                <h1 className="text-lg  sm:text-xl">Rockstar Award</h1>
                <h3 className="text-slate-300">Paytm Money, May 2021</h3>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="education">
            <h1 className="text-lg  sm:text-xl">
              B.Tech, Computer Science Engineering
            </h1>
            <h3 className="text-slate-300">
              2014-2018, Jaypee Institute of Information Technology
            </h3>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AboutSection;
