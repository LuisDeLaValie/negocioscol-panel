"use client";

import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./styles.css";
import { useRouter } from "next/navigation";

interface Servicio {
  Nombre: string;
  Descripcion: string;
  Unidad: number;
  Imagen: string;
}

interface Props {
  params: { slug: string[] };
}

const Page = ({ params }: Props) => {
  const router = useRouter();
  const [formData, setformData] = useState<Servicio>(undefined!);
  const [loading, setLoading] = useState<boolean>(true);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: ["Unidad"].includes(name) ? Number(value) : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
      ...formData,
      Imagen:
        "https://www.fixferreterias.com/media/product/287/martillo-10-oz-mango-comfort-grip-pretulmo-10e-e86.jpg",
    });

    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `http://localhost:8081/api/${params.slug[0]}/${params.slug[1]}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        router.replace("/");
      })
      .catch((error) => console.error(error));
  };

  const getData = async (tipo: string, id: string) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const requestOptions: RequestInit = {
        method: "Get",
        headers: myHeaders,
        redirect: "follow",
      };

      var respinse = await fetch(
        `http://localhost:8081/api/${tipo}/${id}`,
        requestOptions
      );

      var data = JSON.parse(await respinse.text());
      console.log(data);
      setformData({
        Nombre: data.Nombre,
        Descripcion: data.Descripcion,
        Imagen: data.Imagen,
        Unidad: data.Unidad,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // useRef to track component mount status
  const isMounted = useRef(true);

  useEffect(() => {
    getData(params.slug[0], params.slug[1]);
    // Cleanup function to set isMounted to false when the component unmounts
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!formData) {
    return <div>Error al cargar los datos.</div>;
  }

  // return (
  //   <ul>
  //     <li>{formData.Nombre}</li>
  //     <li>{formData.Descripcion}</li>
  //     <li>{formData.Imagen}</li>
  //     <li>{formData.Unidad}</li>
  //   </ul>
  // );

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
              value={formData.Nombre ?? ""}
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
              value={formData.Descripcion ?? ""}
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
              value={formData.Unidad ?? ""}
              onChange={handleChange}
              required
            />
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
              onChange={handleChange}
              
            />
          </div> 

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Actualizar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
