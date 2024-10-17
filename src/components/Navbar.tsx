'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "@/images/logo.png";

import DropdownMenu from "@/components/DropdownMenu";

export default function Navbar({ className }: { className?: string }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const router = useRouter();

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div>
      <nav className={`flex px-20 pl-16 p-2 justify-between bg-background ${className}`}>
        <Image src={Logo} alt="Logo" className="ml-1" />
        <ul className="flex">
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('/')}>Home</li>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <div className="mx-2 my-auto relative my-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button onClick={() => router.push('/bikes')}>Motoren</button>
            { isDropdownVisible && <DropdownMenu />}
          </div>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('/accessories')}>Accesoires</li>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('/second-hand')}>Tweedehands</li>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('/news')}>Nieuws</li>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('/promotions')}>Promoties</li>
          <div className="bg-platinum my-auto w-[1px] h-[10px] mx-1"></div>
          <li className="mx-2 my-auto cursor-pointer" onClick={() => router.push('#footer')}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}