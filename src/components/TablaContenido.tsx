import {
  SearchResult,
  isResultNegocio,
  isResultProducto,
  isResultServicio,
} from "@/helper/buscar_helper";
import Link from "next/link";
import React from "react";

interface Props {
  resultaods: SearchResult[];
}

const TablaContenido = ({ resultaods }: Props) => {
  return (
    <div className="grid  m-5 grid-cols-2 md:grid-cols-4 gap-4 h-full scroll-m-1">
      {resultaods?.map((item, i) => {
        if (isResultServicio(item)) {
          return (
            <Link key={i} href={`/actualizar/servicios/${item.Id_servicio}`}>
              <Contenido nombre={item.Nombre} imagen={item.Imagen} />
            </Link>
          );
        }

        if (isResultProducto(item)) {
          return (
            <Link key={i} href={`/actualizar/producto/${item.Id_Producto}`}>
              <Contenido nombre={item.Nombre} imagen={item.Imagen} />
            </Link>
          );
        }
        if (isResultNegocio(item)) {
          return (
            <Contenido key={i} nombre={item.Negocio} imagen={item.Imagen} />
          );
        }

        return;
      })??[]}
    </div>
  );
};

const Contenido = ({ nombre, imagen }: { imagen: string; nombre: string }) => {
  return (
    <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 border border-gray-200 rounded-lg shadow">
      <img className="rounded-lg w-full h-full" src={imagen} alt={"image"} />
      <figcaption className="absolute px-4 text-lg text-red-400 font-semibold bottom-6">
        {nombre}
      </figcaption>
    </figure>
  );
};

export default TablaContenido;
