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
    <div className="w-full p-4  mb-14 sm:mb-0 mt-4 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/a43711df-c428-4f88-8bb3-b2ac5f20608f/d018d3cd-2602-44a4-a9e2-5b66e5fef473/ID-en-20230227-popsignuptwoweeks-perspective_alpha_website_large.jpg)]">
      <div className="flex gap-y-4 flex-col-reverse sm:flex-row sm:justify-between h-full">
        <div className="flex flex-row ml-0 sm:ml-4 items-center justify-center text-white">
          <IconCopyright />
          <p>KyOuka-</p>
        </div>
        <div className="flex flex-col items-center h-full justify-center mr-0 sm:mr-4 gap-y-2">
          <h1 className="text-white capitalize">follow me on</h1>
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
