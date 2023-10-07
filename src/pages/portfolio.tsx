import type { GetStaticProps, NextPage } from "next";
import ProjectCard, { type TProjectCard } from "~/components/project-card";

// export type TProjectCard = {
//     image?: string;
//     cardBackground?: boolean;
//     name: string;
//     codeLink: string;
//     previewLink: string;
//     description: string;
//     techUsed: string[];
//   };

const PORTFOLIO_PROJECTS: TProjectCard[] = [
  {
    name: "Todo Next",
    codeLink: "https://github.com/AtinAgnihotri/todo-next",
    previewLink: "https://todo-next.atinagnihotri.com",
    description:
      "A Todo App with cursor pagination and auth built using T3 Stack",
    techUsed: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "tRPC",
      "Prisma",
      "Clerk",
      "shadcn",
      "Tanstack Table",
      "Supabase",
    ],
    image: "/images/projects/todo-next.png",
  },
  {
    name: "This Site",
    codeLink: "https://github.com/AtinAgnihotri/personal-site",
    previewLink: "https://www.atinagnihotri.com",
    description: "You know what it is",
    techUsed: ["NextJS", "Typescript", "Tailwind", "tRPC"],
    image: "/images/projects/personal_site.png",
    cardBackground: true,
  },
  {
    name: "Emojer",
    codeLink: "https://github.com/AtinAgnihotri/emojer",
    previewLink: "https://emojer.atinagnihotri.com",
    description: "Clone of a dead bird replaced by an alphabet",
    techUsed: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "tRPC",
      "Prisma",
      "PlanetScale",
      "Upstash",
      "Clerk",
    ],
    image: "/images/projects/emojer.png",
    cardBackground: true,
  },
  {
    name: "Glog-Aggregator",
    codeLink: "https://github.com/AtinAgnihotri/glog-aggregator",
    description: "A simple blog aggregator with a long-running service worker",
    techUsed: ["Go", "Chi Router", "PostgresQL", "Goose", "sqlc"],
    cardBackground: true,
  },
  {
    name: "Overhead",
    codeLink: "https://github.com/AtinAgnihotri/Overhead",
    description: "An Expense Tracking app built in SwiftUI",
    techUsed: [
      "SwiftUI",
      "UIKit",
      "Swift",
      "Core Data",
      "CloudKit",
      "Core Graphics",
      "Core Animation",
      "Local Notification",
      "UserDefaults",
      "IntrospectSwiftUI",
      "Swift Package Manager",
      "Swift",
    ],
    image: "/images/projects/rot_light_dark.gif",
    cardBackground: true,
  },
  {
    name: "Meals to Go",
    codeLink: "https://github.com/AtinAgnihotri/MealsToGoClone",
    previewLink: "https://expo.dev/@atinagnihotri/MealsToGo",
    description: "A Zomato-esque clone made in React Native",
    techUsed: [
      "React Native",
      "React Navigation",
      "React Native Maps (Google and Apple Maps)",
      "Firebase Auth",
      "Lottie",
      "AsyncStorage",
      "Expo Camera",
    ],
    image: "/images/projects/meals_to_go.png",
    cardBackground: true,
  },
  {
    name: "PlantTester",
    codeLink: "https://github.com/AtinAgnihotri/PlantTester",
    previewLink: "https://app.bitrise.io/app/6358872685672728",
    description: "A Dummy App to practice my testing chops",
    techUsed: [
      "Android",
      "Java",
      "Espresso",
      "Barista",
      "MockWebServer",
      "UIAutomator",
      "Bitrise",
      "Gspread",
      "Python",
      "Trefle API",
    ],
    cardBackground: true,
  },
  {
    name: "Step Runner",
    codeLink: "https://github.com/AtinAgnihotri/PlantTester",
    description:
      "A vertical infinite runner that requires both and skill and luck to get good at.",
    techUsed: ["Unity", "C#", "TextMesh Pro"],
    image: "/images/projects/step_runner.png",
    cardBackground: true,
    bgType: "clip",
  },
  {
    name: "Any Many More",
    codeLink: "https://github.com/AtinAgnihotri",
    // previewLink: "https://app.bitrise.io/app/6358872685672728",
    description: "See all my projects on Github",
    techUsed: [
      "React",
      "React Native",
      "Next",
      "Go",
      "SwiftUI",
      "UIKit",
      "Python",
      "Unity",
    ],
    image: "/images/projects/github.png",
    cardBackground: true,
  },
];

const Portfolio: NextPage<{ projects: TProjectCard[] }> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-5 pt-20 md:grid-cols-3">
      {projects.map((p) => {
        return <ProjectCard {...p} key={p.name} />;
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      projects: PORTFOLIO_PROJECTS,
    },
  };
};

export default Portfolio;
