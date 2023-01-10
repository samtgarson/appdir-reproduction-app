"use client";

import { ReactNode } from "react";

export const ClientComponent = ({
  d,
  children,
}: {
  d: Date;
  children: ReactNode;
}) => {
  console.log(children);

  return (
    <>
      <p>{d.toString()}</p>
      {children}
    </>
  );
};
