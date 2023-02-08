// Part 1
const categoriesQuantity = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesQuantity.length}`);

// Part 2
const categoriesName = document.querySelector("#categories");
const itemList = categoriesName.children;

for (const element of itemList) {
    console.log("Categorie:" + element.querySelector("h2").textContent);
    console.log("Elements:" + element.querySelector("ul").children.length);
}