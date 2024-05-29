async function CerarServicioProducto(data: any, tipo: string): Promise<void> {
  try {
    console.log("console.log(apiUrl);");
    const apiUrl = process.env.NEXT_PUBLIC_PUBLIC_API_URL;
    console.log(apiUrl);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(data);
    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(`${apiUrl}/api/${tipo}`, requestOptions);

    var response_data = await response.text();
    console.log(response_data);
  } catch (error) {
    console.log(error);
  }
}
