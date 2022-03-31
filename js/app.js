console.log("We are creating our Project of Easy Note");

showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let addTitle = document.getElementById("addTitle");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }

    notesArr.push(myObj);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    addTxt.value = "";
    addTitle.value = "";
    // console.log(notes);
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }
    let html = "";
    notesArr.forEach(function (element, index) {
        html += `<div class="card mx-2 my-2 " style="width: 12em;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                         <button id=${index} onclick  = "deleteNote(this.id)" class="btn btn-primary">Delete note</button>
                    </div>
                </div>`
    });
    let addnotes = document.getElementById("notes");
    if (notesArr.length == 0) {
        addnotes.innerHTML = `Nothing to show please use "Add Notes" to add notes here !!`
    }
    else {
        addnotes.innerHTML = html;
    }
}

function deleteNote(index) {
    console.log("I am deleting this ", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesArr = [];
    }
    else {
        notesArr = JSON.parse(notes);
    }

    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr))
    showNotes();

}

let search = document.getElementById('searchTxt')
search.addEventListener("input", function (value) {

    let inputValue = search.value;
    // console.log('Input is fired ', inputValue)

    let noteCards = document.getElementsByClassName("card");
    Array.from(noteCards).forEach(function (element) {

        let cardText = element.innerText;

        if (cardText.includes(inputValue)) {
            element.style.display = "block";
        }
        else {
            element.style.display = " none";
        }
        // console.log(cardTxt)
    })


})
