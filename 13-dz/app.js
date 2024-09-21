const user = {
  search: "Вася",
  take: "10",
};

const obj = {
  id: 22,
  type: "string",
  value: "Новая строка",
  createdAt: Date.now(),
  updateAt: null,
};

function query(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

console.log(query(user));
console.log(query(obj));
