// console.log("To-Do List");
//display date
let date=document.getElementById("date");
let today= new Date();//present date
let options={weekday:"long",month:"short",day:"numeric"};//date format
date.innerHTML=today.toLocaleDateString("en-US",options);

//If user adds a note, add it to the local storage
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",function (e) {
    
    let addTxt=document.getElementById("addTxt");
    //getting any notes, if already added, from the local storage
    let notes=localStorage.getItem("notes");

    if(notes==null){
        notesObj=[];//an array is created to store the notes

    }
    else{
        
        notesObj=JSON.parse(notes);//to convert the added notes into items of the array
    
    }
    if (addTxt.value!="") {
        notesObj.push(addTxt.value);//the notes we added is passed on to join the notes i.e. to update the notes IF a blank note is not entered
        
    }
    
    localStorage.setItem("notes",JSON.stringify(notesObj));//the updated array is now converted to string and added to the local storage
    addTxt.value="";//once Add to List btn is clicked, the note written is added to the local storage AND the textarea must now be cleared so that new notes can be added
    console.log(notesObj);
    showNotes();
});
//this is to display the notes added on the note cards
function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];//again now if no notes in local storage, empty array created

    }
    else{
        notesObj=JSON.parse(notes);//if notes are there they are taken from the local storage in the form of an array

    }
    //the html of the filled up note cards
    let html="";
    notesObj.forEach(function(element,index) {
        html+=`<div class="noteCard">
        <p>${element}</p>

      <button onclick="deleteNote(this.id)" id="${index}"class="dltBtn">Delete</button>
       
   </div>`
        
    });
    //the html is now added inside the div class notes so that it is displayed in the website
    let notesElm=document.querySelector(".notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=`<button id="clear" onclick="clearAll()">Clear All</button>`+html;
    }
    else{
        
        notesElm.innerHTML="<p style='color:rgb(241, 92, 6)'>Please add stuff to your to-do list now!</p>"//incase there is nothing to show
    }
}
//function to delete note
function deleteNote(index) {
    // console.log("I am deleting");
    // console.log(index);
    //now we obtaine the array again from the local storage
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(index,1);//to delete the items of that index
    localStorage.setItem("notes",JSON.stringify(notesObj));//this is done t update the local storage now with the updated array
    showNotes();//to display the notes now
}

//clear all button
function clearAll() {
    let notes = localStorage.getItem("notes");
    if(notes==null){
        notesObj=[];

    }
    else{
        notesObj=JSON.parse(notes);
    }

    notesObj.splice(0,notesObj.length);//all items of array are removed
    localStorage.setItem("notes",JSON.stringify(notesObj));//this is done t update the local storage now with the updated array
    showNotes();//to display the notes now
}