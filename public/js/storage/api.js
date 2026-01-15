export async function save(data) {
  return fetch("/api/bilty", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

export async function getAll() {
  const res = await fetch("/api/bilty");
  return res.json();
}
