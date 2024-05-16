export async function getDatas() {
  const res = await fetch("http://localhost:3000/product");
  const data = await res.json();
  return data;
}
export async function addDatas(val) {
  const res = await fetch("http://localhost:3000/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(val),
  });
  const data = await res.json();
  return data;
}
export async function deleteDatas(id) {
  const res = await fetch("http://localhost:3000/product/" + id, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
}
