"use client"
import Link from "next/link"
import Menu from "./Menu"
import { useState } from 'react'


const NavBar = () => {

    const [open, setOpen] = useState(false);
    const [close, setClose] = useState(false);


    return (
        <div className="h-12 text-white-500 border-b-2 border-b-white-500 items-center uppercase px-4 flex justify-between">
        <div className="text-xl"> 
        <Link href="/" >  SweetSip Delights </Link> 
        </div>
        <div> 
        <Menu/>
         </div>
        
        </div>
    )
    }
    
    export default NavBar;