function displayNotes() {
    const notepad = document.querySelector(".data");
    notepad.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const note = localStorage.getItem(key);
        const noteElement = document.createElement("p");
        if (key !== "" && noteElement !== "") {
            noteElement.textContent = `${key}: ${note}`;
            noteElement.id = key;
        }

        const editButton = document.createElement("button");
        editButton.classList.add("editbtn");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", (event) => {
            event.preventDefault();
            let editing = confirm("Are you sure for editing")
            if (editing) {
                document.getElementById("title").value = key;
                document.getElementById("notes").value = note;
                document.getElementById("notes").focus();
            }
        });
        if (key !== "" && noteElement !== "") {
            noteElement.appendChild(editButton);
        }

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("deletebtn")
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            let deleting = confirm("Are you Sure to Delete")
            if (deleting) {
                localStorage.removeItem(key);
                noteElement.remove();
                displayNotes();
            }
        });
        if (key !== "" && noteElement !== "") {
            noteElement.appendChild(deleteButton);
        }


        notepad.appendChild(noteElement);
    }
}

let isEdit = false;
const addButton = document.getElementById("btn");
addButton.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const note = document.getElementById("notes").value;

    if (isEdit) {
        localStorage.setItem(title, note);
        isEdit = false;
    } else {
        localStorage.setItem(title, note);
    }

    document.getElementById("title").value = "";
    document.getElementById("notes").value = "";
    displayNotes();
});

displayNotes();






