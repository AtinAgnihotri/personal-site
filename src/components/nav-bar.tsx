import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdWhatsapp, MdEmail, MdPhone } from "react-icons/md";
import { Separator } from "./ui/separator";

const NavBar = () => {
  return (
    <>
      <nav className="fixed flex w-full justify-end bg-black ">
        <div className="flex flex-wrap items-center justify-end p-4 md:w-full">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden md:h-0 md:w-0"
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
          </button>
          <div
            className="hidden w-full flex-row justify-between md:flex md:w-full"
            id="navbar-default"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-black bg-green-300 p-4 font-medium dark:border-gray-700 dark:bg-black md:mt-0 md:flex-row md:space-x-2 md:border-0 md:bg-black md:p-0 md:dark:bg-black">
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="https://github.com/AtinAgnihotri">
                    <FaGithub />
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="https://twitter.com/AgnihotriAtin">
                    <FaTwitter />
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="https://www.linkedin.com/in/atin-agnihotri/">
                    <FaLinkedin />
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="mailto:atinagnihotri@gmail.com">
                    <MdEmail />
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="https://api.whatsapp.com/send?phone=9896241931">
                    <MdWhatsapp />
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <a href="tel:+919896241931">
                    <MdPhone />
                  </a>
                </Button>
              </li>
            </ul>
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-black bg-green-300 p-4 font-medium dark:border-gray-700 dark:bg-black md:mt-0 md:flex-row md:space-x-2 md:border-0 md:bg-black md:p-0 md:dark:bg-black">
              <li>
                <Button asChild variant="link" className="text-white">
                  <Link href="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <Link href="/about">About</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <Link href="/portfolio">Projects</Link>
                </Button>
              </li>
              <li>
                <Button asChild variant="link" className="text-white">
                  <Link href="/blog">Blog</Link>
                </Button>
              </li>
            </ul>
          </div>
          <Separator className="mt-2 hidden md:block" />
        </div>
      </nav>

      <div className="h-5" />
    </>
  );
};

export default NavBar;
