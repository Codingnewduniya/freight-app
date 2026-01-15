export function save(data) {
  const list = JSON.parse(localStorage.getItem("bilties")) || [];
  list.push({ ...data, id: Date.now() });
  localStorage.setItem("bilties", JSON.stringify(list));
}

export function getAll() {
  return JSON.parse(localStorage.getItem("bilties")) || [];
}
