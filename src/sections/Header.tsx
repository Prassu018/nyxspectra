// components/Header.tsx

import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#why-us">Why Us?</a>
              <a href="#help">Help</a>
              {/* <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Schedule a Demo Today! */}
              {/* </button> */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
