import React from "react";
//  Countup animation
import CountUp from "react-countup";
//  OnScroll
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
const Projects = () => {
  const [scroll, setScroll] = useState(false);
  return (
    //          Projects section
    <ScrollTrigger
      onEnter={() => setScroll(true)}
      onExit={() => setScroll(false)}
    >
      <section className="min-h-[60vh] bg-secondary  px-[3rem]  " id="project">
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
  );
};

export default Projects;
