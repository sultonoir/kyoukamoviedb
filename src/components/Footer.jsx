import { IconBrandFigma, IconBrandGithub, IconBrandInstagram, IconBrandTwitter, IconCopyright } from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  const sosial = [
    { icon: <IconBrandTwitter />, nama: "sultonoir", link: `https://twitter.com/sultonoir` },
    { icon: <IconBrandGithub />, nama: "sultonoir", link: `https://github.com/sultonoir` },
    { icon: <IconBrandInstagram />, nama: "sultonoir", link: `https://instagram.com/sultonoir` },
    { icon: <IconBrandFigma />, nama: "sultonoir", link: `https://figma.com/@sultonoir` },
  ];
  return (
    <div className="w-full p-4  mb-14 sm:mb-0 mt-4 bg-[url(/footer-bg.jpg)]">
      <div className="flex gap-y-4 flex-col-reverse sm:flex-row sm:justify-between h-full">
        <div className="flex flex-row ml-0 sm:ml-4 items-center justify-center text-white">
          <IconCopyright />
          <p>KyOuka-</p>
        </div>
        <div className="flex flex-col items-center h-full justify-center mr-0 sm:mr-4 gap-y-2">
          <h1 className="text-white capitalize">follow me on social media</h1>
          <div className="flex flex-row gap-x-3">
            {sosial.map((s) => (
              <a href={s.link} key={s.link} target="_blank" rel="noopener noreferrer">
                <p className="text-white rounded-md hover:bg-hvr bg-prymary py-1 px-2">{s.icon}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
