import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="min-h-[20vh]    p-[1rem]  bg-secondary">
      <div className="flex flex-row  justify-center items-center text-center xs:text-left flex-wrap xs:justify-between align-middle w-[90%] mx-auto  text-grey font-medium text-base">
        {/*  Links */}
        <div className="flex flex-col justify-center 1xs:flex-row flex-wrap text-center xs:text-left 1xs:justify-start align-middle gap-[.7rem] py-[1.5rem]">
          <Link href="#">Privacy policy</Link>
          <Link href="#">Legal notice</Link>
          <Link href="#">Terms of service</Link>
        </div>
        <div>
          <p>© Copyright 2023 - Puur</p>
          <p> Developed by Syed Moazam Ali</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
