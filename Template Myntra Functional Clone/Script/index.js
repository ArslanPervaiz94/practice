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
  <button class="btn-add-bag">Add to Bag</button>
  </div>`;
});
itemsContainerElement.innerHTML = innerHTML;
