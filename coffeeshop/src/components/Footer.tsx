import Link from "next/link";
import React from "react";
const Footer = () => {
    return (
        <div className=" footer h-12 md:h-24 p-4 lg:p-10 xl:p-10 bg-amber-950 text-white flex items-center justify-between" >
<Link href='/' className="font-bold text-xl uppercase"> SweetSip Delights</Link>
<p>ALL RIGHTS RESERVED</p>
          
        </div>
    )
    }
    
    export default Footer;