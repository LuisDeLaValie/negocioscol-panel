import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
    <h2>pos no</h2>
      <div>{children}</div>
    </>
  );
};

export default layout;
