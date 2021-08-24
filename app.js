// console.log("To-Do List");
//display date
let date=document.getElementById("date");
let today= new Date();//present date
let options={weekday:"long",month:"short",day:"numeric"};//date format
date.innerHTML=today.toLocaleDateString("en-US",options);