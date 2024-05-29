export default async function ObrenerServicioProducto(
  tipo: string,
  id: string
): Promise<any> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions: RequestInit = {
      method: "Get",
      headers: myHeaders,
      redirect: "follow",
    };

    var respinse = await fetch(`${apiUrl}/api/${tipo}/${id}`, requestOptions);

    var data = JSON.parse(await respinse.text());

    return data;
  } catch (error) {
    console.error(error);
    return Promise.reject(error);
  }
}
