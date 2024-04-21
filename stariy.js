const productList = document.querySelector("#productList");
const sebetList = document.querySelector(".korzinaProducts");
const basketcount = document.querySelector(".basketcount");
let basketcountNum = 0;

const sebetProducts = [];

if (localStorage.getItem("sebet")) {
  for (let i = 0; i < sebetProducts.length; i++) {
  }
} else {
  localStorage.setItem("sebet", 0);
}


function addSebet(id) {
  let taarget = products.find((x) => x.id == id);
  taarget.count++;
  basketcountNum++;
  basketcount.innerHTML = `${basketcountNum}`;
  sebetProducts.push(taarget);
  localStorage.setItem("sebet", 0);
}

