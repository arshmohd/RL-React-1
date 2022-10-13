import React from "react";
import cardData from "../data/card-data";
import MainCard from "./MainCard";
const Card = () => {
  return (
    <div className="flex w-full justify-around items-center text-left ">
      {cardData.map((data, i) => {
        return (
          <MainCard 
          key={i} 
          card_img={data.card_img} 
          h1={data.h1} 
          p={data.p} 
          />
        );
      })}
    </div>
  );
};
export default Card;
