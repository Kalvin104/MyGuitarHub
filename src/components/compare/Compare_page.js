import React from "react";

//import { getGuitars } from "./src/api.js";

export default function Compare_page() {
  const [allGuitars, setAllGuitars] = React.useState([]);

  // React.useEffect(() => {
  //   async function loadGuitars() {
  //     try {
  //       const data = await getGuitars();
  //       setAllGuitars(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   loadGuitars();
  // }, []);

  return (
    <>
      <h2>Compare Guitars</h2>
      <p>Compare the specs of different guitars.</p>
    </>
  );
}
