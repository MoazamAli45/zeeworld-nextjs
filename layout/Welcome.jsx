import React from "react";
import Image from "next/image";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const Welcome = () => {
  return (
    <section className="min-h-[100vh] py-2rem" id="welcome">
      <div className=" flex flex-row justify-center align-middle gap-[1rem] mt-[-2rem] xs:mt-[-5rem] w-[90%] mx-auto ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[65px] h-[65px]  rounded-xl xs:w-[100px] xs:h-[100px] 1xl:w-[165px] 1xl:h-[165px] xs:rounded-3xl bg-primary"
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
            Nog even en het toeristisch seizoen gaat weer van start. Het eerste
            weekend waarop je met het gezin eropuit kunt trekken staat dan
            alweer voor de deur, het paasweekend.
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
  );
};

export default Welcome;
