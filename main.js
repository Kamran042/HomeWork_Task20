const productList = document.querySelector("#productList");
const basketCount = document.querySelector(".basketcount");
const korzinaProducts = document.querySelector(".korzinaProducts");
const sebetNav = document.querySelector(".sebetNav");
const rightKorzina = document.querySelector(".rightKorzina");
const rightKorzinaXXX = document.querySelector(".rightKorzinaXXX");
const costKorzina = document.querySelector(".costKorzina");

const products = [
  {
    id: 0,
    img: "https://basket-our.netlify.app/assets/img/cake.jpeg",
    name: "Product 1",
    count: 1,
    price: 5,
  },
  {
    id: 1,
    img: "https://basket-our.netlify.app/assets/img/drink.jpeg",
    name: "Product 2",
    count: 1,
    price: 2,
  },
  {
    id: 2,
    img: "https://basket-our.netlify.app/assets/img/pizza-1.jpeg",
    name: "Product 3",
    count: 1,
    price: 3,
  },
  {
    id: 3,
    img: "https://basket-our.netlify.app/assets/img/pizza-mix.jpeg",
    name: "Product 4",
    count: 1,
    price: 5,
  },
  {
    id: 4,
    img: "https://basket-our.netlify.app/assets/img/soup-1.jpeg",
    name: "Product 5",
    count: 1,
    price: 2.5,
  },
  {
    id: 5,
    img: "https://basket-our.netlify.app/assets/img/sous.jpeg",
    name: "Product 6",
    count: 1,
    price: 0.9,
  },
  
];

for (let i = 0; i < products.length; i++) {
  productList.innerHTML += `
        <div class="col-lg-3 cardPr" >
            <div class="card" style="width: 18rem" data-id="1">
              <img src="${products[i].img}" alt="..." />
              <div class="card-body">
                  <h5 class="card-title">${products[i].name}</h5>
                  <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  </p>
                  <h5 class="card-title">${products[i].price} $</h5>
                  <button href="#" onclick="addToCard(${products[i].id})" class="btn btn-primary">Baskete Elave Et</button>
              </div>
            </div>
        </div>
      `;
}
let korzina = [];

if(localStorage.getItem('korzina')){
    korzina = JSON.parse(localStorage.getItem('korzina'))
    showCartProducts()
}

function addToCard(id){
    const checkCart = korzina.find(data => data.id == id)
    if(checkCart){
        checkCart.count++
        showCartProducts()
        cost()
    }else{
        const checkProduct = products.find(x => x.id == id)
        korzina.push(checkProduct)
        localStorage.setItem('korzina',JSON.stringify(korzina))
        showCartProducts()
        cost()
    }
}

function showCartProducts(){
    korzinaProducts.innerHTML = ''
    for (let i = 0; i < korzina.length; i++) {
        korzinaProducts.innerHTML+=`
        <div class="card_sebet">
            <img src="${korzina[i].img}" alt="">
            <h5>${korzina[i].name}</h5>
            <div class="card_sebet__btns">
                <button onclick="changeCount('dec',${korzina[i].id})">-</button>
                <p>${korzina[i].count}</p>
                <button onclick="changeCount('inc',${korzina[i].id})">+</button>
            </div>
            <span>${korzina[i].price*korzina[i].count} $</span>
        </div>
        `
    }
    num()
    cost()
    localStorage.setItem('korzina',JSON.stringify(korzina))

}

function changeCount(type,id){
    if(type == 'inc'){
        let checkCart = korzina.find(data =>data.id == id )
        checkCart.count+=1
    }else{
        let checkCart = korzina.find(data => data.id ==id )
        checkCart.count-=1

        if(checkCart.count == 0){
            let ind = korzina.findIndex(data => data.id == id)
            korzina.splice(ind,1)
        }
    }

    localStorage.setItem('korzina',JSON.stringify(korzina))
    showCartProducts()
    cost()
}


function num(){
    
    basketCount.innerHTML= ''
    basketCount.innerHTML += `
    ${korzina.length}
    `
}

function cost(){
    costKorzina.innerHTML= ``
    var total = 0;
    korzina.forEach(data => {
        console.log();
        total+=data.price*data.count
    })
    console.log(total);
    costKorzina.innerHTML = `Total Price: ${total} $`
}

cost()

sebetNav.addEventListener('click', () => {
    rightKorzina.classList.toggle('rightKorzina_right')
    console.log(333);
})

rightKorzinaXXX.addEventListener('click', () => {
    rightKorzina.classList.toggle('rightKorzina_right')
    console.log(333);
})