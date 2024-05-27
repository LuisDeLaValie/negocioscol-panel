import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";

const Filtros = ({ calback }: { calback: (val: string) => void }) => {
  const [busqueda, setBusqueda] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setBusqueda(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    calback(busqueda);
  };

  return (
    <div className="py-10 px-7 flex justify-end gap-10 items-center al ">
      <Link
        href={"/crear"}
        type="button"
        className="text-black bg-Primary hover:bg-Primary-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Crear
      </Link>

      <form className="w-80" onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar"
            value={busqueda}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 bg-Primary hover:bg-Primary-200focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Filtros;
