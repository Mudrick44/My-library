const addBook = document.getElementById("add-book");
const formcontainer = document.getElementById("form-container");

// adding an event listener to the add book button inorder to display the form
addBook.addEventListener("click", function () {
  formcontainer.style.display = "block";
});

const myLibrary = [];

const displaybooks = document.getElementById("display-books");
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const number = document.getElementById("number").value;
const submitbutton = document.getElementById("submit-book");
const titledisplay = document.getElementById("titledisplay");
const authordisplay = document.getElementById("authordisplay");
const numberdisplay = document.getElementById("numberdisplay");

submitbutton.addEventListener("click", function (event) {
  event.preventDefault();
  
  // grabbing reference to the html elements
  const displaybooks = document.getElementById("display-books");
  const form = document.getElementById("form");
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const number = document.getElementById("number").value;
  const submitbutton = document.getElementById("submit-book");

  const formcontainer = document.getElementById("form-container");
  const bookcontent = document.createElement("div");
  bookcontent.className = "book-content";
  const titlecontent = document.createElement("div");
  titlecontent.className = "book-content-element";
  titlecontent.innerText = title;

  const authorcontent = document.createElement("div");
  authorcontent.className = "book-content-element";
  authorcontent.innerText = author;

  const numbercontent = document.createElement("div");
  numbercontent.className = "book-content-element";
  numbercontent.innerText = number;

  //  making sure that all the fields are not left empty before submitting the form
  if (title === "" || author === "" || number === "") {
    document.getElementById("errorMsg").innerText =
      "Please fill in all fields.";
    return;
  } else {
    document.getElementById("errorMsg").innerText = "";
  }
  //   creating a togglebutton so that to show weather book is read or not read
  const togglebuttoncontent = document.createElement("div");
  togglebuttoncontent.className = "book-content-element";
  const togglebutton = document.createElement("button");
  togglebutton.textContent = "Read";
  togglebutton.addEventListener("click", function () {
    if (togglebutton.textContent === "Read") {
      togglebutton.textContent = "not read";
      togglebutton.style.backgroundColor = "red";
      togglebutton.style.outlineColor = "none";
    } else {
      togglebutton.textContent === "not read";
      togglebutton.textContent = "Read";
      togglebutton.style.backgroundColor = "#3498db";
      togglebutton.style.outlineColor = "none";
    }
  });

  //    creating a delete button to delete the book
  const deletebuttoncontent = document.createElement("div");
  const deletebutton = document.createElement("button");
  deletebutton.textContent = "Delete book";
  deletebutton.addEventListener("click", function () {
    bookcontent.remove();
  });

  bookcontent.appendChild(titlecontent);
  bookcontent.appendChild(authorcontent);
  bookcontent.appendChild(numbercontent);
  togglebuttoncontent.appendChild(togglebutton);
  deletebuttoncontent.appendChild(deletebutton);
  bookcontent.appendChild(togglebuttoncontent);
  bookcontent.appendChild(deletebuttoncontent);
  displaybooks.appendChild(bookcontent);
  displaybooks.style.display = "flex";

  //   removing the form after clicking the  submit button
  formcontainer.style.display = "none";
  myLibrary.push(bookcontent);
  form.reset();
});
