import React from "react";
import Image from "next/image";
import { assets } from "@/Assets/assets";
const Footer = () => {
  return <div className="flex justify-around flex-col gap-2 sm:flex-row bg-black items-center py-5">
    <Image src={assets.logo_light} alt="000" width={120}/>
    <p className="text-sm text-white">All right reserved.Copyright @blogger</p>
    <div className="flex">
        <Image src={assets.facebook_icon} alt="000" width={40}/>
        <Image src={assets.twitter_icon} alt="000" width={40}/>
        <Image src={assets.googleplus_icon} alt="000" width={40}/>
    </div>
  </div>;
};

export default Footer;
