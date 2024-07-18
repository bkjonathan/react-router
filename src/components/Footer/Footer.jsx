import { Link } from "react-router-dom";
import FacebookSVG from "../icons/FacebookSVG.jsx";
import DiscordSVG from "../icons/DiscordSVG.jsx";
import TwitterSVG from "../icons/TwitterSVG.jsx";
import GithubSVG from "../icons/GithubSVG.jsx";
import DribbbleSVG from "../icons/DribbbleSVG.jsx";
import SocialMediaLink from "./SocialMediaLink.jsx";
import Section from "./Section.jsx";

const Footer = () => {
  const sections = [
    {
      title: "Resources",
      links: [
        { name: "Home", url: "/" },
        { name: "About", url: "/about" },
      ],
    },
    {
      title: "Follow us",
      links: [
        { name: "Github", url: "https://github.com/bkjonathan", isExternal: true },
        { name: "Discord", url: "/" }, // Assuming Discord link is internal for demonstration
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", url: "#" },
        { name: "Terms & Conditions", url: "#" },
      ],
    },
  ];

  const socialLinks = [
    { url: "#", icon: <FacebookSVG />, label: "Facebook page" },
    { url: "#", icon: <DiscordSVG />, label: "Discord community" },
    { url: "#", icon: <TwitterSVG />, label: "Twitter page" },
    { url: "#", icon: <GithubSVG />, label: "GitHub account" },
    { url: "#", icon: <DribbbleSVG />, label: "Dribbble account" },
  ];

  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {sections.map((section) => (
              <Section key={section.title} title={section.title} links={section.links} />
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024
            <a href="https://github.com/bkjonathan" className="hover:underline">
              bkjonathan
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            {socialLinks.map((link, index) => (
              <SocialMediaLink key={index} url={link.url} icon={link.icon} label={link.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
