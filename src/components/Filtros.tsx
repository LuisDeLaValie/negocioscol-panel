import Link from "next/link";
import React from "react";

const Filtros = () => {
  return (
    <div className="py-10 px-7 flex justify-end gap-10 items-center al ">
      <Link
        href={"/crear"}
        type="button"
        className="text-black bg-Primary hover:bg-Primary-200 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Crear
      </Link>
      <input
        type="search"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5"
        placeholder="search"
        required
      />
    </div>
  );
};

export default Filtros;
