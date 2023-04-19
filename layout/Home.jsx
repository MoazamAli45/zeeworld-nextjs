import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

//  react modern drawer
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  //   Toggle drawer function
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <section>
      <div
        className=" min-h-[100vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        {/*  nav bar */}
        <div className="w-[90%] mx-auto py-6 flex flex-row justify-between">
          <div className="relative w-[100px] 1xl:w-[300px] h-[150px] sm:w-[150px] sm:h-[100px]">
            <Image
              src="/images/logo.svg"
              alt="logo"
              fill
              className="object-contain"
              priority={true}
            />
          </div>
          <nav className="my-auto hidden 1xl:flex flex-row justify-between align-middle w-[60%]  sm:hidden">
            <ul className="text-[white] flex flex-row align-middle gap-6 font-bold">
              <li
                className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[3px] hover:before:w-[100%]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:ease-in-out
                  "
              >
                <Link href="#">Evenementen</Link>
              </li>
              <li
                className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[3px] hover:before:w-[100%]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:ease-in-out
                  "
              >
                <Link href="#">Ontdekken</Link>
              </li>
              <li
                className="relative before:content-[''] before:absolute before:bg-white before:w-0 before:h-[3px] hover:before:w-[100%]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:in-expo before:origin-center
                  "
              >
                <Link href="#">Nieuws</Link>
              </li>
            </ul>
            <div>
              <button className="bg-primary text-[white] font-bold py-2 px-4 rounded-full">
                Download App
              </button>
            </div>
          </nav>
          {/*  humburger Icon */}
          <button onClick={toggleDrawer} className="block xl:hidden">
            <MenuIcon className="  text-white text-2xl" />
          </button>
        </div>

        {/*  Heading og Background */}
        {/*  leading for line height */}
        <div className=" sm:max-w-[497px] text-white md:ml-[10rem] sm:ml-[5rem] px-auto text-center w-[60vw]  sm:text-left mt-[8rem] leading-6">
          <h2 className="text-white font-bold text-4xl">
            Ontdek de mogelijkheden van{" "}
            <span className="text-primary"> Zeewolde</span>
          </h2>
          {/*  text-base 16px  font-normal 400 */}
          <p className="text-base font-normal">
            De ideale omgeving om te recreëren, te verblijven, te werken en te
            wonen.
          </p>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        size={{
          xs: "100%",
        }}
        className="sm:w-[100vw]  md:w-[40vw] flex flex-col justify-center align-middle"
      >
        <div className="flex flex-col h-[95%] my-auto justify-center gap-[4rem] align-middle text-center">
          <div className="flex justify-end mr-[1rem]">
            <CloseIcon onClick={() => setIsOpen(false)} />
          </div>
          <nav className=" flex flex-col justify-start align-middle gap-[3rem]  basis-[80%]  my-[6rem]">
            <ul className="text-[#001A23] flex flex-col align-middle gap-6 font-bold">
              <li
                className="relative before:content-[''] before:absolute before:bg-[#001A23] before:w-0 before:h-[3px] hover:before:w-[100px]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:ease-in-out
                  "
              >
                <Link href="#welcome">Evenementen</Link>
              </li>
              <li
                className="relative before:content-[''] before:absolute before:bg-[#001A23] before:w-0 before:h-[3px] hover:before:w-[80px]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:ease-in-out
                  "
              >
                <Link href="#">Ontdekken</Link>
              </li>
              <li
                className="relative before:content-[''] before:absolute before:bg-[#001A23] before:w-0 before:h-[3px] hover:before:w-[58px]  before:bottom-0 before:transition-[width]  before:duration-500 before:delay-75 before:in-expo before:origin-center
                  "
              >
                <Link href="#">Nieuws</Link>
              </li>
            </ul>
            <div>
              <button className="bg-primary text-[white] font-bold py-2 px-4 rounded-full ">
                Download App
              </button>
            </div>
          </nav>
        </div>
      </Drawer>
    </section>
  );
};

export default Home;
