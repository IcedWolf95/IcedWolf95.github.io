import React, { useState } from "react";
const Accesibility_tools = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };

  const increaseTextSize = () => {
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    textElements.forEach((element) => {
      const currentFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      const newFontSize = currentFontSize * 1.1;
      element.style.fontSize = `${newFontSize}px`;
    });
  };

  const decreaseTextSize = () => {
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    textElements.forEach((element) => {
      const currentFontSize = parseFloat(
        window.getComputedStyle(element).fontSize
      );
      const newFontSize = currentFontSize * 0.9;
      element.style.fontSize = `${newFontSize}px`;
    });
  };

  const grayscaleMode = () => {
    const body = document.body;
    body.style.filter = "grayscale(100%)";
  };

  const highContrastMode = () => {
    const html = document.documentElement;
    html.classList.add("dark");
    const whiteElements = document.querySelectorAll(".bg-white");
    whiteElements.forEach((element) => {
      element.classList.add("dark:bg-black");
    });
  };

  const negativeContrastMode = () => {
    const body = document.body;
    body.style.filter = "invert(100%)";
  };

  const underlineLinks = () => {
    const linkElements = document.querySelectorAll("a[href]");
    linkElements.forEach((element) => {
      element.style.textDecoration = "underline";
    });
  };

  const readableFont = () => {
    const textElements = document.querySelectorAll(
      "h1, h2, h3, h4, h5, h6, p, span, a"
    );
    textElements.forEach((element) => {
      element.style.fontFamily = "Arial, sans-serif";
      element.style.fontSize = "19px";
    });
  };

  const resetValues = () => {
    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.removeProperty("font-size");
      element.style.removeProperty("filter");
      element.style.removeProperty("color");
      element.style.removeProperty("background-color");
      element.style.removeProperty("text-decoration");
      element.style.removeProperty("font-family");
      element.classList.remove("dark");
    });
  };
  return (
    <div
      className={`fixed  z-50 flex flex-row items-center h-full transition-right duration-500 ease-in-out ${
        open ? "right-0" : "right-[-166px]"
      }`}
    >
      <button
        className=" text-white bg-gray-500 rounded-full h-14 w-14 text-[40px] translate-x-0 flex justify-center items-center duration-500 ease-in-out"
        onClick={toggleOpen}
      >
        <i className="fa-solid fa-universal-access"></i>
      </button>
      <ul className=" bg-white dark:bg-slate-800 shadow-lg py-2 mt-2 rounded-lg divide-y">
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={increaseTextSize}
          >
            Aumentar texto
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={decreaseTextSize}
          >
            Disminuir texto
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={grayscaleMode}
          >
            Escala de grises
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={highContrastMode}
          >
            Alto contraste
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={negativeContrastMode}
          >
            Contraste negativo
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={underlineLinks}
          >
            Subrayar enlaces
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={readableFont}
          >
            Fuente legible
          </button>
        </li>
        <li>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
            onClick={resetValues}
          >
            Restablecer
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Accesibility_tools;
