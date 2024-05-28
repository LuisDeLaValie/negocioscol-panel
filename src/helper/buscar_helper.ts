import NegocioSearch from "@/models/Negocio";
import ProductoSearch from "@/models/Producto";
import ServicioSearch from "@/models/servicios";

export type SearchResult = NegocioSearch | ServicioSearch | ProductoSearch;

export const Buscar = async (buscar: string): Promise<SearchResult[]> => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "Get",
      headers: myHeaders,
      redirect: "follow",
    };

    var respinse = await fetch(
      `http://localhost:8081/api/buscar?buscar=${buscar}`,
      requestOptions
    );
    var data = await respinse.text();
    console.log(`espos resultaods ${data}`);
    return JSON.parse(data ?? []);
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
};

export function isResultNegocio(obj: any): obj is NegocioSearch {
  return (
    typeof obj.Id_Negocio === "number" &&
    typeof obj.Negocio === "string" &&
    typeof obj.Descripsion === "string" &&
    typeof obj.Imagen === "string"
  );
}
export function isResultServicio(obj: any): obj is ServicioSearch {
  return (
    typeof obj.Id_Negocio === "number" &&
    typeof obj.Id_servicio === "number" &&
    typeof obj.Negocio === "string" &&
    typeof obj.Nombre === "string" &&
    typeof obj.Descripsion === "string" &&
    typeof obj.Imagen === "string"
  );
}
export function isResultProducto(obj: any): obj is ProductoSearch {
  return (
    typeof obj.Id_Negocio === "number" &&
    typeof obj.Id_Producto === "number" &&
    typeof obj.Negocio === "string" &&
    typeof obj.Nombre === "string" &&
    typeof obj.Descripsion === "string" &&
    typeof obj.Imagen === "string"
  );
}
