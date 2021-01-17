const button = document.querySelector("#submit");

// grab all the items
const todoList = document.querySelector("#todo-list");
const items = todoList.children;
// grab Number of Items
const todoNr = document.querySelector(".todo-nr b");


// CLICK, SCROLL, RESIZING THE BROWSER


// ATTACH A VENT LISTENER
button.addEventListener('click', () => {
  //<li class="item">Item 3</li>
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length+1}`;
  // add vao id todoList
  todoList.appendChild(newItem);  
  // Dynamic Number of items -> create a bold tag
  todoNr.innerText = items.length;
})

// ADD REMOVE TOGGLE CLASS WITH EVENT LISTENER




