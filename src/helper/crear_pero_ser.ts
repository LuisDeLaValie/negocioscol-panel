export default async function CerarServicioProducto(
  data: any,
  tipo: string
): Promise<void> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);

    console.log(raw);
    
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(`${apiUrl}/api/${tipo}`, requestOptions);
    var response_data = JSON.parse(await response.text());

    console.log(response.status);

    if (response.status !== 200) {
      throw response_data.error_description;
    }
    console.log(response_data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
