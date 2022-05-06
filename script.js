const elements = [];
const elementsDelete = [];
const elementsDone = [];
let id = 0;

const getHTML = (elements) => {
	let map = elements.map(elem => {
		const newToDo = `<div id="output" class="output">${elem.text}
		<button id="buttonDelToDo" class="buttonDelToDo" onclick="delToDo(${elem.id})">
			<img class="imgDelete"
			  src="https://png.pngitem.com/pimgs/s/31-314793_free-delete-icon-png-edit-and-delete-icons.png" alt="">
		 </button>
		 <button id="buttonDone" class="buttonDone" onclick="doneToDo(${elem.id})">
			<img class="imgDone"
			  src="https://st3.depositphotos.com/20524830/34673/v/600/depositphotos_346730160-stock-illustration-yes-icon-this-flat-rounded.jpg"
			  alt="">
		 </button>
		</div>`
		return newToDo;
	})
	return map;
}

const updateHTML = (elements) => {
	// const result = elements.filter(elem => elem.status === "active" ? (true) :
	// 	(elem.status === "deleted" ? (true) :
	// 		(elem.status === "doned" ? (true) : (false))
	// 	)
	// )
	// // console.log(result)
	const result = elements.filter(elem => elem.status === "active")
	document.getElementById('containerOutput').innerHTML = getHTML(result);
	document.getElementById("searchInput").value = "";

}

const addToDo = () => {
	const text = document.getElementById('searchInput').value;
	if (text != false) {
		id = id + 1;
		elements.push({ id, text, status: "active" });
		updateHTML(elements)
	}
	console.log(elements)
}

const delToDo = (id) => {
	for (i = 0; i < elements.length; i++) {
		let elemId = elements[i].id;
		if (elemId === id) {
			elements[i].status = "deleted";
			updateHTML(elements)
			console.log(elements)
		}
	}
}

const doneToDo = (id) => {
	for (i = 0; i < elements.length; i++) {
		let elemId = elements[i].id;
		if (elemId === id) {
			elements[i].status = "doned";
			updateHTML(elements)
			console.log(elements)
		}
	}
}

const onChangeElementsFunction = () => {
	let optionActive = document.getElementById('optionActive').value;
	let optionDoned = document.getElementById('optionDoned').value;
	let optionDeleted = document.getElementById('optionDeleted').value;
	const select = document.getElementById("selectMenu");
	const value = select.value;
	if (value === optionActive) {
		updateHTML(elements)
	}
	else if (value === optionDoned) {

		const result = elements.filter(elem => elem.status === "doned")
		document.getElementById('containerOutput').innerHTML = getHTML(result);
		document.getElementById("searchInput").value = "";
	}
	else if (value === optionDeleted) {

		const result = elements.filter(elem => elem.status === "deleted")
		document.getElementById('containerOutput').innerHTML = getHTML(result);
		document.getElementById("searchInput").value = "";
	}
	// console.log(optionThree)
	// console.log(value)
	// updateHTML()
}
