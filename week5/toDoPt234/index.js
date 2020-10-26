
// Get 
const getItem = () => {
  axios
    .get("https://api.vschool.io/christian_vanloon/todo/")
    .then((res) => {
      displayItems(res.data);
    })
    .catch((err) => console.error(err));
};
getItem();

const displayItems = (data) => {
  console.log(data);
  let container = document.getElementById("toDoItems");

  data.forEach((todo) => {
    let todoBox = document.createElement("div");
    let title = document.createElement("h1");
    let description = document.createElement("h3");
    let price = document.createElement("h3");
    todoBox.className = "todoContainer"
    title.textContent = "Title: " + todo.title;
    description.textContent = "Description: " + todo.description;
    price.textContent = "$" + todo.price;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn1"
    deleteButton.id = todo._id;
    deleteButton.addEventListener("click", deleteItem);

    let completeButton = document.createElement("button");
    let completeButtonText = "";
    completeButton.className = "btn2"
    todo.completed
      ? (completeButtonText = "Mark Incomplete")
      : (completeButtonText = "Mark Complete");

    completeButton.innerText = completeButtonText;
    completeButton.id = todo._id;
    completeButton.value = todo.completed;
    completeButton.addEventListener("click", updateItem);

    todoBox.appendChild(title);
    todoBox.appendChild(description);
    todoBox.appendChild(price);
    container.appendChild(todoBox);
    todoBox.appendChild(completeButton);
    todoBox.appendChild(deleteButton);
  });
};

// Post
const postItem = (event) => {
  event.preventDefault();
  console.log("");

  const itemTitle = document.getElementById("input1");
  const itemDescription = document.getElementById("input2");
  const itemPrice = document.getElementById("input3");
  const itemComplete = document.getElementById("inputComplete");
  console.dir(itemComplete);

  let newItem = {
    title: itemTitle.value,
    description: itemDescription.value,
    price: itemPrice.value,
    completed: itemComplete.checked,
  };
  console.log(newItem);
  axios
    .post("https://api.vschool.io/christian_vanloon/todo/", newItem)
    .then(() => {
      location.reload();
    })
    .catch((err) => console.log(err));
};
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", postItem);

// Delete
const deleteItem = (event) => {
  console.log(event.target.id);
  axios
    .delete(`https://api.vschool.io/christian_vanloon/todo/${event.target.id}`)
    .then(() => {
      location.reload();
    })
    .catch((err) => console.log(err));
};

// Put
const updateItem = (event) => {
  console.log(event.target.value);
  isCompleted = null;
  event.target.value === "true" ? (isCompleted = true) : (isCompleted = false);
  let updatedItem = { completed: !isCompleted };

  axios
    .put(
      `https://api.vschool.io/christian_vanloon/todo/${event.target.id}`,
      updatedItem
    )
    .then(() => location.reload())
    .catch((err) => console.log(err));
};
