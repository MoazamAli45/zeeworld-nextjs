import React from "react";

import ProjectTabs from "../components/Tabs";
const CardsSection = () => {
  return (
    <section className="min-h-[120vh] py-[2rem]">
      <div
        className="h-[95%] "
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(0,26,35,1) 60%, rgba(0,26,35,1) 100%)",
        }}
      >
        <div className="text-center w-[75%] xs:w-[45%]  mx-auto leading-6">
          <h4 className="text-primary text-lg font-semibold">Beleven</h4>
          <h3 className="font-bold text-3xl">Een selectie</h3>
          <p className="text-grey font-normal">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration in some form.
          </p>
        </div>
        {/*           Tabs                    */}
        {/* flex flex-row justify-center align-center */}
        <div className="pt-[2rem] pb-[6rem] 1xl:w-[90%] w-[95%] mx-auto">
          <ProjectTabs />
        </div>
      </div>
      {/* <div className="  xxs:min-h-[85vh]  min-h-[140vh] xl:min-h-[80vh] bg-secondary z-[-10] pb-[2rem]"></div> */}
    </section>
  );
};

export default CardsSection;
