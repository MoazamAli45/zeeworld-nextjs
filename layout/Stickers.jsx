import React from "react";
import Image from "next/image";
const Stickers = () => {
  return (
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
      </div>
    </section>
  );
};

export default Stickers;
