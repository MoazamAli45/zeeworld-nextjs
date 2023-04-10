import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
//  react modern drawer
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

//  Countup animation
import CountUp from "react-countup";
//  OnScroll
import ScrollTrigger from "react-scroll-trigger";

import { useState } from "react";
import ProjectTabs from "../components/tabs";

const inter = Inter({ subsets: ["latin"] });

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const [scroll, setScroll] = useState(false);

  //   Toggle drawer function
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
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
              <MenuIcon className="  text-white" />
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

      {/*                                Welcome Section                                          */}
      <section className="min-h-[100vh] py-2rem" id="welcome">
        <div className=" flex flex-row justify-center align-middle gap-[1rem] mt-[-2rem] xs:mt-[-5rem] ">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[50px] h-[50px]  rounded-xl xs:w-[100px] xs:h-[100px] 1xl:w-[165px] 1xl:h-[165px] xs:rounded-3xl bg-primary"
              ></div>
            );
          })}
        </div>
        <div className="w-[90%] mx-auto py-[4rem] flex flex-row flex-wrap justify-center align-middle gap-[4rem] ">
          <div className="grid grid-cols-2 grid-rows-4 grid-flow-col gap-[20px] width:50vw">
            <div className=" relative row-start-1 row-end-3 xs:w-[250px] xs:h-[320px] w-[120px] h-[170px] 1xs:w-[170px] 1xs:h-[200px] ">
              <Image
                src="/images/welcome1.jpg"
                alt="welcome"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className=" relative row-start-3 row-end-5 xs:w-[250px] xs:h-[320px] w-[120px] h-[170px] 1xs:w-[170px] 1xs:h-[200px]  ">
              <Image
                src="/images/welcome2.jpg"
                alt="welcome"
                // width={250}
                // height={320}
                // className="row-start-3 row-end-5"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            <div className=" relative row-start-2 row-end-4 xs:w-[250px] xs:h-[320px] w-[120px] h-[170px] 1xs:w-[170px] 1xs:h-[200px]  ">
              <Image
                src="/images/welcome3.jpg"
                alt="welcome"
                // width={250}
                // height={320}
                // className="row-start-2 row-end-4"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
          {/*  Welcome content */}
          <div className=" w-[90%] mx-auto 1xl:basis-[50%] align-middle my-auto text-center xs:text-left">
            <h4 className="text-primary text-[18px] font-semibold">WELKOM</h4>
            <h3 className="font-bold text-2xl ">Welkom in Zeewolde</h3>
            <p className="font-medium text-xl">
              Al plannen gemaakt voor dit jaar?
            </p>
            <p className="font-normal text-grey text-base 1xs:my-[2rem] my-[1rem]">
              Nog even en het toeristisch seizoen gaat weer van start. Het
              eerste weekend waarop je met het gezin eropuit kunt trekken staat
              dan alweer voor de deur, het paasweekend.
            </p>
            <p className="font-normal text-grey text-base 1xs:my-[2rem] my-[1rem]">
              Boek een van de vele accommodaties in Zeewolde en trek heerlijk de
              natuur in. Stap op de fiets of maak een heerlijke wandeling in een
              van vele natuurgebieden van Zeewolde.
            </p>
            <button className=" py-3 px-12 rounded-full bg-[#B4D333] text-white font-semibold my-[2rem]">
              Bekijken
            </button>
          </div>
        </div>
      </section>

      {/*                Projects Section                      */}
      <ScrollTrigger
        onEnter={() => setScroll(true)}
        onExit={() => setScroll(false)}
      >
        <section
          className="min-h-[60vh] bg-secondary  px-[3rem]  "
          id="project"
        >
          <div className="w-[80%] mx-auto text-center  py-[3rem] ">
            <h3 className="text-lg font-semibold text-green">Ontdekken</h3>
            <h2 className="text-3xl font-bold text-white">
              Er is genoeg te ontdekken{" "}
            </h2>
            {/*                                Contains Projects      */}
            <div className="w-[99%]  mx-auto flex flex-col xs:flex-row flex-wrap justify-around align-middle gap-[3rem] mt-[3rem]">
              <div className=" flex flex-col  gap-[2rem]">
                {scroll && (
                  <CountUp
                    start={0}
                    end={203}
                    duration={2}
                    delay={0}
                    className="text-white font-bold text-5xl"
                  />
                )}
                {/* <h2 className="text-white font-bold text-5xl">203</h2> */}
                <p className="font-normal text-white text-lg ">Evenementen</p>
              </div>
              <div className=" flex flex-col  gap-[1.5rem]">
                {scroll && (
                  <CountUp
                    start={0}
                    end={102}
                    duration={2}
                    delay={0}
                    className="text-white font-bold text-5xl"
                  />
                )}
                {/* <h2 className="text-white font-bold text-5xl">102</h2> */}
                <p className="font-normal text-white text-lg ">Locaties</p>
              </div>
              <div className=" flex flex-col  gap-[2rem]">
                {scroll && (
                  <CountUp
                    start={0}
                    end={33}
                    duration={2}
                    delay={0}
                    className="text-white font-bold text-5xl"
                  />
                )}
                {/* <h2 className="text-white font-bold text-5xl">33</h2> */}
                <p className="font-normal text-white text-lg ">Iets anders</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/*                 Cards Section                                                                  */}

      <section className="min-h-[100vh] py-[2rem]">
        <div className="xxs:h-[95vh] h-[190vh] ">
          <div className="min-h-[100vh] z-[100]">
            <div className="text-center w-[45%]  mx-auto leading-6">
              <h4 className="text-primary text-lg font-semibold">Beleven</h4>
              <h3 className="font-bold text-3xl">Een selectie</h3>
              <p className="text-grey font-normal">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
            {/*           Tabs                    */}
            {/* flex flex-row justify-center align-center */}
            <div className=" my-[4rem] 1xl:w-[90%] w-[95%] mx-auto">
              <ProjectTabs />
            </div>
          </div>
        </div>
        <div className="xxs:min-h-[85vh]  min-h-[120vh] xl:min-h-[80vh] bg-secondary z-[-10]"></div>
      </section>
      {/*                           Stickers Section                                */}
      <section className="min-h-[40vh] my-[2rem]">
        <div className="flex flex-row flex-wrap justify-center gap-[2rem] xs:gap-[4rem] w-[90%] mx-auto z-[100]">
          <div className="relative w-[300px] h-[185px]">
            <Image
              src="/images/stciker1.svg"
              alt="sticker"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[300px] h-[185px]">
            <Image
              src="/images/sticker2.svg"
              alt="sticker"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative w-[300px] h-[185px]">
            <Image
              src="/images/sticker3.svg"
              alt="sticker"
              fill
              className="object-contain"
            />
          </div>

          {/* <div className="relative  w-[300px]">
          <Image src="/images/sticker2.svg" alt="sticker" fill className="object-contain" />
          </div>
        <div className="relative  w-[300px]">
          <Image src="/images/sticker3.svg" alt="sticker" fill className="object-contain" />
          </div> */}
        </div>
      </section>
      {/*  Footer */}
      <footer className="min-h-[20vh]    p-[1rem]  bg-secondary">
        <div className="flex flex-row  justify-center text-center xs:text-left flex-wrap xs:justify-between align-middle w-[90%] mx-auto  text-grey font-medium text-base">
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
    </>
  );
}
