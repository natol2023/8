// 1. Создайте новый элемент , добавьте ему текст и добавьте его после элемента с id "existingElement".

function createElementAfter() {
    let existingElement = document.querySelector("#existingElement");
    let paragraph = document.createElement("p");
    paragraph.innerText = "New Element";
    existingElement.after(paragraph);
  }
  createElementAfter();

//   Создайте новый элемент , добавьте ему текст и вставьте его внутрь элемента с id "parentElement".

function createElementInto() {
    let existingElement = document.querySelector("#existingElement");
    let paragraph = document.createElement("p");
    paragraph.innerText = "New Element";
    existingElement.append(paragraph);
  }
//   createElementInto();

//   Удалите элемент с классом "removeMe".

function deleteElement() {
    let existingElement = document.querySelector("#existingElement");
    let block = document.createElement("div");
    block.classList.block.setAttribute("class", "removeMe");
    existingElement.append(block);
    let deleteElement = document.querySelector(".removeMe");
    deleteElement.remove();
  }