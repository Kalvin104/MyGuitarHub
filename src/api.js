export async function getGuitars() {
  const res = await fetch("/api/guitars/");
  if (!res.ok) {
    throw {
      message: "Failed to fetch guitars",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data.guitars;
}
