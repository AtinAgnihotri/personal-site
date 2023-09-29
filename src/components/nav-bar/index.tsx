import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdWhatsapp, MdEmail, MdPhone } from "react-icons/md";
import { Separator } from "../ui/separator";
import {
  NavDrawer,
  NavDrawerButton,
  SiteNavButtons,
  SocialNavButtons,
} from "./composables";

const NavBar = () => {
  return (
    <>
      <nav className="fixed flex w-full justify-end bg-black ">
        <div className="flex flex-wrap items-center justify-end p-4 md:w-full">
          {/* <NavDrawerButton /> */}
          <NavDrawer />
          <div
            className="hidden w-full flex-row justify-between md:flex md:w-full"
            id="navbar-default"
          >
            <SocialNavButtons />
            <SiteNavButtons />
          </div>
          <Separator className="mt-2 hidden md:block" />
        </div>
      </nav>

      <div className="h-5" />
    </>
  );
};

export default NavBar;
