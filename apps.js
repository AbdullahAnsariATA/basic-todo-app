var toDoList = document.querySelector("#list-container");
var textInput = document.querySelector("#text-input");
var addButton = document.querySelector("#add-button");
var paraButton = document.getElementsByTagName("button")
var editItemRef;


function addToDoList() {
    if (textInput.value !== "") {
        
    //--------------Paragraph Tag----Start------------//
    var p = document.createElement("P");
    var toDoTextInList = document.createTextNode(textInput.value);
    p.appendChild(toDoTextInList);
    //--------------Paragraph Tag----Eng--------------//

    //--------------Delete Button----Start------------//
    var deleteBtn = document.createElement("button");
    var deleteBtnTextNode = document.createTextNode("Delete");
    deleteBtn.appendChild(deleteBtnTextNode);
    deleteBtn.setAttribute("onClick", "deleteToDo(this)");
    //--------------Delete Button----End--------------//

    //--------------Edit Button------Start------------//
    var editBtn = document.createElement("button");
    var editBtnTextNode = document.createTextNode("Edit");
    editBtn.appendChild(editBtnTextNode);
    editBtn.setAttribute("onClick", "editToDo(this)");
    // editBtn.setAttribute("onClick", "editFunction(this)");
    //--------------Edit Button------End--------------//


    p.appendChild(deleteBtn);   // Adding Delete Button In Paragraph Tag.
    p.appendChild(editBtn);     // Adding Edit Button In Paragraph Tag.
    toDoList.appendChild(p);    // Adding Paragraph Tag In toDoList(Div).

    //--------------Secret_Functions---------------//  START
    if (textInput.value === "red color") {
        var HTMLbody = document.querySelector("body");
        var para = document.querySelector("p");
        var deleteButton = document.querySelector("#delete-button");
        var textInputColor = document.querySelector("input");
        HTMLbody.style.backgroundColor="#ff6262";
        para.style.backgroundColor="#ffcccc";
        addButton.style.backgroundColor="#ff6262";
        deleteButton.style.backgroundColor="#ff6262";
        textInputColor.style.borderColor="red";
        para.childNodes[1].style.backgroundColor="#ff6262";
        para.childNodes[1].style.borderColor="white";
        para.childNodes[2].style.backgroundColor="#ff6262";
        para.childNodes[2].style.borderColor="white";
        para.childNodes[2].style.color="white";
        

        
    }

    textInput.value = ""; // Clearing Input Value


    }
    else {alert("Please Enter Something In Input Bar.")};  // Showing Alert Msg For Empty Input
}


function editToDo(element) {
    // element.parentNode.firstChild.nodeValue = prompt("Write Updated Text.");    
    editItemRef = element.parentNode
    textInput.value =  editItemRef.firstChild.nodeValue    
    addButton.innerHTML = "Save"; 
    addButton.onclick = saveTodo;
}

function saveTodo() {
    editItemRef.firstChild.nodeValue = textInput.value;
    textInput.value = "";
    addButton.innerHTML = "Add";
    addButton.onclick = addToDoList;
    editItemRef = undefined;
}


function deleteToDo(element) {
    toDoList.removeChild(element.parentNode);
    console.log(toDoList.childNodes)
}


function deleteAllTask() {
    toDoList.innerHTML = ""; // Delete All Paragraph Added Dynamically.
    textInput.value = "";
    addButton.innerHTML = "Add";
    addButton.onclick = addToDoList;

    // window.location.reload();   // You Can Also Use Window Reload(refresh) Function For Delete All Paragraph...
}




//---------Coded_By_@ATA------------//           *//+923160120286//*          :)--Good_Luck--(: