import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}
const HomeCard = (props: HomeCardProps) => {
  return (
    <div
      className={`${props.className} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={() => {
        props.handleClick();
      }}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image src={props.img} height={27} width={27} alt="meeting" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <p className="text-lg font-normal">{props.description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
