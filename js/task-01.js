const categories = document.querySelector("#categories");
const newItems = categories.getElementsByClassName("item");
const newItemsArray = Array.from(newItems);
const countOfLi = newItemsArray.length;
console.log(`Number of categories: ${countOfLi}`);

newItemsArray.forEach((item, index) => {
  const categoryTitle = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);

  if (index < countOfLi - 1) {
    const nextCategoryTitle =
      newItemsArray[index + 1].querySelector("h2").textContent;
    console.log(`Next Category: ${nextCategoryTitle}`);
  }

  if (index > 0) {
    const prevCategoryTitle =
      newItemsArray[index - 1].querySelector("h2").textContent;
    console.log(`Previous Category: ${prevCategoryTitle}`);
  }
});
