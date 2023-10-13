const categories = document.querySelector("#categories");
const newItems = categories.getElementsByClassName("item");
const newItemsArray = Array.from(newItems);
const countOfLi = newItemsArray.length;
console.log(`Number of categories: ${countOfLi}`);

newItemsArray.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
