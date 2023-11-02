export async function getGuitars() {
  console.log("get guitars ran ok");
  try {
    const response = await fetch("/api/guitars", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const results = await response.json();
    return results.guitars;
  } catch (err) {
    console.log("ERR:", err);
  }
}
