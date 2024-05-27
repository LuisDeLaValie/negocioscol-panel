"use client";

import Filtros from "@/components/Filtros";
import TablaContenido from "@/components/TablaContenido";
import { Buscar, SearchResult } from "@/helper/buscar_helper";
import { useEffect, useState } from "react";

export default function Home() {
  const [busqueda, setBusqueda] = useState<SearchResult[]>([]);

  const buscar = (buscar: string) => {
    Buscar(buscar).then((val) => setBusqueda(val));
  };

  useEffect(() => {
    buscar("");
  }, []);

  return (
    <div>
      <Filtros calback={buscar} />
      <TablaContenido resultaods={busqueda} />
    </div>
  );
}
