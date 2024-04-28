const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("you must type something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    //to add cross beside the text thats added
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    //we need to add cross beside text which is in li tag so we append li..

    li.appendChild(span);
  }
  //to erase text after adding text , :
  inputBox.value = "";
  saveData();
}
//to remove text apon clicking cross

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      //here parentElement is li Element, and it will be removed...
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
//to save data after refreshing

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
//to display saveData()
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
