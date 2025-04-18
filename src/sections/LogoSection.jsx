import React from "react";
import { logoIconsList } from "../constants";
import { div } from "three/tsl";
const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((item, index) => (
            <LogoIcon key={index} icon={item} />
          ))}
          {logoIconsList.map((item, index) => (
            <LogoIcon key={index} icon={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
