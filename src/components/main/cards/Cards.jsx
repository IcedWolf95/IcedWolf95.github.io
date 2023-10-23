import React from "react";
import Card from "./card";
import ImgATM from "./Logos/ATM.png";
import ImgInv from "./logos/Inv.png";
import ImgOf from "./Logos/oferta.png";
import ImgAlb from "./logos/albergues.png";
import ImgLabo from "./Logos/laboral.png";
import ImgEst from "./Logos/estudiantes.png";
import ImgInet from "./Logos/INET.png";

const Cards = () => {
  return (
    <>
      <section className="flex md:flex-row flex-col gap-4 overflow-x-auto items-center w-[93%] h-56 bg-slate-300 dark:bg-slate-950 p-4 rounded-lg ">
        <Card
          //Ingresar los atributos necesarios para configurar cara tarjeta
          text="Aulas Talleres Móviles"
          img={ImgATM}
          alt="android"
        />
        <Card
          text="Inversión en Educación Técnico Profesional"
          img= {ImgInv}
          alt="android"
        />
        <Card
          text="Catálogo de Instituciones y oferta formativa"
          img={ImgOf}
          alt="android"
        />
        <Card
          text="Albergues y residencias estudiantiles "
          img={ImgAlb}
          alt="android"
        />
        <Card
          text="Vinculación laboral local para egresados"
          img={ImgLabo}
        />
        <Card
          text="Centros de Estudiantes"
          img={ImgEst}
          alt="android"
        />
        <Card
          text="INET"
          img={ImgInet}
          alt="android"
        />
      </section>
    </>
  );
};

export default Cards;
