import type { PropsWithChildren } from "react";
import { Button } from "../ui/button";
import { NavLinks, SocialLinks } from "./constants";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "~/lib/utils";

const NavButtonCollection: React.FC<
  PropsWithChildren & { className?: string }
> = ({ children, className }) => {
  return (
    <ul
      className={cn(
        "mt-4 flex flex-col rounded-lg p-4  font-medium dark:bg-black  md:mt-0 md:flex-row md:space-x-2 md:border-0 md:bg-black md:bg-black md:p-0 md:dark:bg-black",
        className,
      )}
    >
      {children}
    </ul>
  );
};

export type TNavButtons = {
  drawer?: boolean;
};

export const SocialNavButtons: React.FC<TNavButtons> = ({ drawer }) => {
  return (
    <NavButtonCollection
      className={drawer ? "-mt-4 flex-row justify-center" : ""}
    >
      {SocialLinks.map((sl) => {
        return (
          <li key={sl.key}>
            <Button asChild variant="link" className="text-white">
              <a href={sl.link} target="_blank">
                {sl.child}
              </a>
            </Button>
          </li>
        );
      })}
    </NavButtonCollection>
  );
};

export const SiteNavButtons: React.FC<TNavButtons> = ({ drawer }) => {
  return (
    <NavButtonCollection>
      {NavLinks.map((nv) => {
        return (
          <li key={nv.key} className="flex justify-center">
            <Button asChild variant="link" className="text-white">
              <Link href={nv.link}>{nv.child}</Link>
            </Button>
          </li>
        );
      })}
    </NavButtonCollection>
  );
};

export const NavDrawerButton = () => {
  return (
    <div
      data-collapse-toggle="navbar-default"
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 dark:text-gray-400  md:hidden md:h-0 md:w-0"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-5 w-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </div>
  );
};

export const NavDrawerSiteLinks = () => {
  return (
    <NavButtonCollection>
      {NavLinks.map((nv) => {
        return (
          <li key={nv.key}>
            <Button asChild variant="link" className="text-white">
              <Link href={nv.link}>{nv.child}</Link>
            </Button>
          </li>
        );
      })}
    </NavButtonCollection>
  );
};

export const NavDrawer = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <NavDrawerButton />
      </PopoverTrigger>
      <PopoverContent className="w-screen border-transparent bg-transparent p-0 px-4 py-0">
        <div className="bg-[#181818dd]">
          <SiteNavButtons drawer />
          <SocialNavButtons drawer />
        </div>
      </PopoverContent>
    </Popover>
  );
};
