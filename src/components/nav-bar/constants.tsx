import { FaGithub, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdWhatsapp, MdEmail, MdPhone } from "react-icons/md";

type NavBarItem = {
  key: string;
  link: string;
  child: React.ReactNode;
};

type NavBarItems = Record<string, NavBarItem>;

export const SocialLinks: NavBarItem[] = [
  {
    key: "github",
    link: "https://github.com/AtinAgnihotri",
    child: <FaGithub />,
  },
  {
    key: "twitter",
    link: "https://twitter.com/AgnihotriAtin",
    child: <FaTwitter />,
  },
  {
    key: "linkedin",
    link: "https://www.linkedin.com/in/atin-agnihotri/",
    child: <FaLinkedin />,
  },
  {
    key: "email",
    link: "mailto:atinagnihotri@gmail.com",
    child: <MdEmail />,
  },
  {
    key: "whatsapp",
    link: "https://api.whatsapp.com/send?phone=9896241931",
    child: <FaWhatsapp />,
  },
  {
    key: "phone",
    link: "tel:+919896241931",
    child: <MdPhone />,
  },
];

export const NavLinks: NavBarItem[] = [
  {
    key: "home",
    link: "/",
    child: "Home",
  },
  {
    key: "about",
    link: "/about",
    child: "About",
  },
  {
    key: "contact",
    link: "/contact",
    child: "Contact Me",
  },
  {
    key: "projects",
    link: "/portfolio",
    child: "Projects",
  },
  {
    key: "blog",
    link: "/blog",
    child: "Blog",
  },
];
