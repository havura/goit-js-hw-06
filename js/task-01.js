// const categoriesQuantity = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoriesQuantity.length}`);

// for (const element of categoriesQuantity) {
//   const categoriesName = element.querySelector('h2')
//   console.log(`Categorie: ${categoriesName.textContent}`);

//   const itemList = element.querySelectorAll('li')
//   console.log(`Elements: ${itemList.length}`);
// }

const categoriesQuantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesQuantity.length}`);

for (const element of categoriesQuantity) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
