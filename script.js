const noteInput = document.getElementById("noteInput");
const notesContainer = document.getElementById("notesContainer");

loadNotes();

function addNote(){

if(noteInput.value==="") return;

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.push(noteInput.value);

localStorage.setItem("notes",JSON.stringify(notes));

noteInput.value="";

loadNotes();
}

function loadNotes(){

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notesContainer.innerHTML="";

notes.forEach((note,index)=>{

notesContainer.innerHTML += `
<div class="note">
${note}
<button class="delete-btn" onclick="deleteNote(${index})">
Delete
</button>
</div>
`;

});

}

function deleteNote(index){

let notes = JSON.parse(localStorage.getItem("notes")) || [];

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

loadNotes();

}
