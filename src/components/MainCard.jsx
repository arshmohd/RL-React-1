import React from 'react';
const MainCard = ({ card_img, h1, p }) => {
  return (
    <div className='w-[14rem] flex-col self-start p-12'>
      <img className='w-[8rem] h-[8rem] flex self-start' src={card_img} alt="" />
      <h1 className=' font-semibold flex self-start text-2xl mt-6'>{h1}</h1>
      <p className='mt-2 flex self-start'>{p}</p>
    </div>
  );
};

export default MainCard;
