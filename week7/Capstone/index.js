// Get
const getItem = () => {
  axios
    .get("https://api.vschool.io/christian-guess-photo/todo/")
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
    let photoContainer = document.createElement("div");
    let todoBox = document.createElement("div");
    todoBox.id = todo._id;
    container.appendChild(todoBox);
    let title = document.createElement("h1");
    title.textContent = todo.title;
    todoBox.className = "todoContainer";

    // Image
    image = document.createElement("img");
    image.src = `https://picsum.photos/250/250`;
    image.id = todo._id;

    // Delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "btn1";
    deleteButton.id = todo._id;
    deleteButton.addEventListener("click", deleteItem);

    // Edit button
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.className = "btn2";
    editButton.id = todo._id;
    editButton.addEventListener("click", updateItem);

    // Appended Elements
    todoBox.appendChild(image);
    todoBox.appendChild(title);
    todoBox.appendChild(deleteButton);
    todoBox.appendChild(editButton);
  });
};

// Post
const postItem = (event) => {
  event.preventDefault();
  console.log("");

  const itemTitle = document.getElementById("input1");

  let newItem = {
    title: itemTitle.value,
  };
  console.log(newItem);
  axios
    .post("https://api.vschool.io/christian-guess-photo/todo/", newItem)
    .then(() => {
      location.reload();
    })
    .catch((err) => console.log(err));
};
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", postItem);

// Put
const updateItem = (event) => {
  console.log(event.target.id);
  var div = document.getElementById(event.target.id);
  console.log(div);
  let input2 = document.createElement("input");
  input2.placeholder = div.children[1].textContent;
  input2.className = "input2";
  div.append(input2);
  let button2 = document.createElement("button");
  button2.textContent = "Submit";
  button2.className = "btn3";
  div.append(button2);
  button2.addEventListener("click", () => {
    div.children[1].innerHTML = input2.value;

    axios
      .put(
        `https://api.vschool.io/christian-guess-photo/todo/${event.target.id}`,
        { title: input2.value }
      )
      .then((response) => {
        div.children[div.children.length - 1].remove();
        div.children[div.children.length - 1].remove();
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  });
};

// Delete
const deleteItem = (event) => {
  console.log(event.target.id);
  axios
    .delete(
      `https://api.vschool.io/christian-guess-photo/todo/${event.target.id}`
    )
    .then(() => {
      location.reload();
    })
    .catch((err) => console.log(err));
};
