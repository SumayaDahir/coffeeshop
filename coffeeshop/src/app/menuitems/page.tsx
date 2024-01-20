"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import Image1 from 'next/image'

const MenuItems = () => {
//set state of index
const [index, setIndex] = useState(0)
//create function
const menuItems = [
    {
        id:1,
        title: "latte",
        image: 'https://res.cloudinary.com/dyo4fpuxm/image/upload/v1705122085/latte_bu6mca.png'
    }
  ];
  // Log menu items when component mounts
  useEffect(() => {
    console.log("In menu array", menuItems);
  }, []);

const handleClick = () => {
//create an array
const colorArray = ["#0f080e", "#000033", "#800000", "#7c5835"]


// new index
const newIndex = (index + 1) % colorArray.length
setIndex(newIndex)
document.body.style.backgroundColor = colorArray[newIndex]
}

return (
    <div className='array-container'>
      <button onClick={handleClick}> Next </button>
      {menuItems.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <img src={item.image} alt={item.title} />
        </div>
      ))}
    </div>
  );
};
export default MenuItems;