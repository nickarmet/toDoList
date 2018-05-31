var button = document.getElementById('submit');
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

//Create new item

function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDeleteButton();
}

//Create delete button

function createDeleteButton() {
	let deleteButton = document.createElement('button');
	deleteButton.className = 'delete';
	deleteButton.classList.add("fa","fa-trash");
	let lastItem = document.querySelector("ul").lastChild;
	lastItem.appendChild(deleteButton);
}

//Add new item to list when clicked

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//Add new item to list on keypress

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//Strikethrough item on click

function toggleItem(event) {
	let ignore = event.target.tagName;
	if(ignore !== 'BUTTON') {
		event.target.classList.toggle('done');
	}
}

//Delete item when button is clicked

function deleteItem(event) {
	if(event.target.classList.contains("delete")) {
		let li = event.target.parentElement;
		ul.removeChild(li);
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleItem);

ul.addEventListener("click", deleteItem)
