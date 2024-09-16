const user = {
  search: "Вася",
  take: "10",
  query: function () {
    return `search=${this.search}&take=${this.take}`;
  },
};
console.log(user.query());
