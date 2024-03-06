// yeh hum ny html sy class ko access kia hay
let itemsContainerElement = document.querySelector(".items-container");
// yeh obj banaya hay products ko generic/add krnay k liay
// let item = {
//   item_image: "images/1.jpg",
//   rating: {
//     stars: 4.5,
//     noOfReviews: 1400,
//   },
//   company_name: "Carton London",
//   item_name: "Rhodium - Plated CZ Floral Studs",
//   current_price: "Rs 606",
//   orignal_price: "Rs 1045",
//   discount: 42,
// };

// products ko data/items.js is folder and file sy lia ja raha hay idr or phr yeh sara data
// front page pr show ho raha hay

function displayItems() {
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `<div class="item-container">
  <img class="item-img" src="${item.image}" alt="Image 1" />
  <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
  <div class="company-name">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price">
    <span class="current-price">${item.current_price}</span>
    <span class="original-price">${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick ="addToBag(${item.id})" >Add to Bag</button>
  </div>`;
  });
  itemsContainerElement.innerHTML = innerHTML;
}

//array for bag items
let bagItems = [];
onLoad();

// all func are called here
function onLoad() {
  displayItems();
  displayBagCount();
}
// btn add to bag functionality

function addToBag(itemid) {
  bagItems.push(itemid);
  displayBagCount();
}
function displayBagCount() {
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}
