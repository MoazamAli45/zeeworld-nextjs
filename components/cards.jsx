import React from "react";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
const WorkCard = (props) => {
  //  destructing from props
  const { image } = props;
  return (
    <div className="flex flex-col xs:w-[370px] w-[300px]">
      {/*  Images can't be used in tabs */}
      <Avatar
        alt="img"
        src={image}
        variant="rounded"
        className="xs:w-[370px]
              xs:h-[300px]  w-[300px] h-[230px] 
              rounded-3xl"
      />
      <div className="w-[90%] bg-white mx-auto rounded-3xl py-[1rem] px-[2rem]  text-center shadow-md my-[-4rem] z-[100] leading-6">
        <h4 className="text-primary text-lg font-semibold my-[1rem]">
          Category
        </h4>
        <h3 className="font-bold  text-xl my-[1rem]">Lorem Ipsum</h3>
        <button className="py-[.75rem] px-[2rem] rounded-full text-grey font-normal border-2 border-grey text-sm hover:bg-green hover:text-white transition-colors  duration-100  hover:border-0">
          View Details
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
