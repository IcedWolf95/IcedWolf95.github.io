import React from "react";
import Cards from "./cards/Cards";
import ImageCarousel from "./ImageCarousel";

const Main = () => {
  return (
    <>
      <main className=" w-full h-full bg-[#0e68af] dark:bg-slate-900 flex justify-center items-center flex-col mb-3 gap-4">
        <ImageCarousel />
        <Cards />
      </main>
    </>
  );
};

export default Main;
