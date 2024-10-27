// Selecting elements
const itemList = document.getElementById("item-list");
const newItemInput = document.getElementById("new-item");

// Function to add a new item
function addItem() {
  const itemText = newItemInput.value.trim();

  if (itemText === "") return; // Check for empty input

  // Create new list item (li)
  const li = document.createElement("li");
  li.textContent = itemText;

  // Toggle highlight on click
  li.addEventListener("click", () => {
    li.classList.toggle("highlight");
  });

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Remove";
  
  // Remove item on button click
  deleteButton.addEventListener("click", () => {
    itemList.removeChild(li);
  });

  // Append button to li, and li to ul
  li.appendChild(deleteButton);
  itemList.appendChild(li);

  // Clear input
  newItemInput.value = "";}
