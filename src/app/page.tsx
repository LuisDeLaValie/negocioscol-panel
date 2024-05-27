import Filtros from "@/components/Filtros";
import TablaContenido from "@/components/TablaContenido";

export default function Home() {
  const items = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div>
      <Filtros />
      <TablaContenido />
    </div>
  );
}
