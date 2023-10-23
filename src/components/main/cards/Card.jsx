import React from "react";

const Card = (props) => {
  return (
    <div className="md:min-w-[300px] w-[300px]  min-h-[154px] relative bg-blue-400 rounded-[13px] flex justify-center shadow-md hover:scale-105 duration-300">
      <div className="w-[90%] h-[62%] top-[14px] absolute bg-white rounded-[13px]">
        <img
          className="object-contain w-full h-full"
          src={props.img}
          alt={props.alt}
        ></img>
      </div>
      <span className="min-w-[31px] min-h-[31px] left-[9px] top-[115px] absolute bg-white rounded-full"></span>
      <p className=" h-[11px] left-[45px] top-[123px] absolute text-white text-xs font-normal font-['Roboto Flex']">
        {props.text}
      </p>
    </div>
  );
};

export default Card;
