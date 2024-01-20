"use client"
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';

 const Menu = () => {


  const [open, setOpen] = useState(true);

  const toggleMenu = () => {
setOpen(!open)
  };

 
const links = [
  {
    id: 1,
    title:"Home",
    url:"/"
  },
{
  id:2,
  title:"Menu",
  url:"/"
},
{
  id:3,
  title:"Contact Us",
  url:"/"
}
]

  return (
    <div>
     {open ? ( 
   <button onClick={toggleMenu}> <Image src="/open.png" alt="close image" width={20} height={20}/> </button> 
   
     ) : (
      <> 
      <button onClick={toggleMenu}>
        <Image src="/close.png" alt="open image" width={20} height={20}/>
       </button>
            </> 
  )}
  <div>
  <a href='/Home'>Home</a> 

  </div>
    </div>
  );
}
export default Menu;