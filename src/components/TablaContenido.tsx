import React from "react";

const TablaContenido = () => {
  const items = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <div className="grid  m-5 grid-cols-2 md:grid-cols-4 gap-4 h-full scroll-m-1">
      {items.map((item) => (
        <figure
          key={item}
          className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 border border-gray-200 rounded-lg shadow"
        >
          <a href="{repo.svn_url}">
            <img
              className="rounded-lg"
              src="https://www.fixferreterias.com/media/product/287/martillo-10-oz-mango-comfort-grip-pretulmo-10e-e86.jpg"
              alt="image description"
            />
          </a>
          <figcaption className="absolute px-4 text-lg text-red-400 font-semibold bottom-6">
            Martillo
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default TablaContenido;
