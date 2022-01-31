//creating a class
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  sell() {
    if (this.quantity !== 0) {
      this.quantity--;
    }
  }

  store(count) {
    this.quantity += count;
  }
}

//creating an array of elements of a class
const shop = [
  new Product("apple", 32, 6),
  new Product("orange", 24, 6),
  new Product("chocolate", 45, 132),
  new Product("phone", 12300, 65),
  new Product("glass", 130, 32),
  new Product("bread", 39, 2),
  new Product("book", 140, 1),
];

//when the document gets ready
document.addEventListener("DOMContentLoaded", () => {
  addingTheItemsOnPage(shop);
});

//function that displayes everything from the array on a page and adds functionality to buttons
const addingTheItemsOnPage = (arr) => {
  const container = document.querySelector(".container");
  arr.forEach((element) => {
    const div = document.createElement("div");
    div.appendChild(
      getHTML(
        `<div class="item"><h3 class="item__name">${element.name}<h3><div class="item__info"><p class="quantity">quantity: ${element.quantity}</p><p class="price">price: ${element.price}</p><button class="item__button">Buy</button></div></div>`
      )
    );

    const button = div.querySelector(".item__button");
    button.addEventListener("click", () => {
      element.sell();
      div.querySelector(
        ".quantity"
      ).textContent = `quantity: ${element.quantity}`;
    });

    container.appendChild(div);
  });
};

//function that creates HTML
const getHTML = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.firstChild;
};
