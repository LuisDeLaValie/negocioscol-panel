"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import "./styles.css";
import { useRouter } from "next/navigation";

interface Servicio {
  Nombre: string;
  Descripcion: string;
  Unidad: number;
  Negocio: number;
  Imagen: string;
}

const Page = () => {
  const router = useRouter();
  const [formData, setformData] = useState<Servicio>(undefined!);

  const [tipo, setTipo] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "Tipo") {
      setTipo(value);
    } else {
      setformData({
        ...formData,
        [name]: ["Negocio", "Unidad"].includes(name) ? Number(value) : value,
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const raw = {
      ...formData,
      Imagen:
        "https://www.fixferreterias.com/media/product/287/martillo-10-oz-mango-comfort-grip-pretulmo-10e-e86.jpg",
    };

    await CerarServicioProducto(raw, tipo);
  };

  return (
    <div className="flex items-center justify-center pt-5">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              type="text"
              placeholder="Nombre"
              name="Nombre"
              value={formData?.Nombre ?? ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Descripcion
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              type="text"
              placeholder="Descripcion"
              name="Descripcion"
              value={formData?.Descripcion ?? ""}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Unidad
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              type="number"
              placeholder="Unidad"
              name="Unidad"
              value={formData?.Unidad ?? ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label
              form="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              tipo
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="Tipo"
              value={tipo}
              onChange={handleChange}
            >
              <option>Seleccionar tipo</option>
              <option value={"servicios"}>servicio</option>
              <option value={"producto"}>producto</option>
            </select>
          </div>
          <div className="mb-5">
            <label
              form="countries"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Negocio
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              name="Negocio"
              value={formData?.Negocio ?? 0}
              onChange={handleChange}
            >
              <option>Seleccionar Negocio</option>
              <option value={1}>carpinteria</option>
              <option value={2}>ferreteria</option>
              <option value={3}>piezeria</option>
            </select>
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Imagen
            </label>
            <input
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              id="email"
              type="file"
              placeholder="Imagen"
              name="Imagen"
              value={formData?.Imagen ?? ""}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
