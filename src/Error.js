import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error.message);
  console.log(error);
  return (
    <>
      <p>Error: {error.message}</p>
      <p>
        {error.status} - {error.statusText}
      </p>
    </>
  );
}
