export default async function ActualizarServicioProducto(
  data: any,
  tipo: string,
  id: string
): Promise<void> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);
    const requestOptions: RequestInit = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(`${apiUrl}/api/${tipo}/${id}`, requestOptions);

    var response_data = await response.text();
    console.log(response_data);
  } catch (error) {
    console.log(error);
  }
}
