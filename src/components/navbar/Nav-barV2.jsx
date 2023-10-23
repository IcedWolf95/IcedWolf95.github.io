import { useEffect, useState } from "react";
import DarkMode from "../dark-mode/DarkMode";

const NavbarV2 = () => {
  useEffect(() => {
    const navbar = document.querySelector("nav");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-sky-500", "shadow-md", "dark:bg-slate-800");
      } else {
        navbar.classList.remove("bg-sky-500", "shadow-md", "dark:bg-slate-800");
      }
    });
  }, []);
  return (
    <nav className=" sticky h-[64px] w-full z-20 top-0 left-0 transition-all">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
        <img
          className="object-contain h-7"
          src="https://www.inet.edu.ar/wp-content/themes/inet/img/logo-inet2.png"
          alt="inetlogo"
        ></img>
        <div className="flex md:order-2">
          <DarkMode />
        </div>
      </div>
    </nav>
  );
};

export default NavbarV2;
