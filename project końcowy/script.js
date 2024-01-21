import { data } from "./data.js";
const mainContainer = document.getElementById("container");
const buttons = document.getElementById("buttons");
const displayTable = document.getElementById("wievTable");

const displayNavTable = document.getElementById("navTable");
const keys = Object.keys(data);
const wievKeyAndValue = document.getElementById("windowKeuAndValue");
let currentModel = null;
const toggle = document.getElementById("closeWindowKeuAndValue");
toggle.addEventListener("click", closedWindow);


function removeThisLine(event) {
  const rowToRemove = event.target.parentNode.parentNode;
  rowToRemove.parentNode.removeChild(rowToRemove);
}

function closedWindow() {
  toggle.style.display = "none";
  wievKeyAndValue.style.display = "none";
}

function createNewWindow(event) {
  wievKeyAndValue.innerHTML = "";
  wievKeyAndValue.style.display = "inline-block";
  toggle.style.display = "inline-block";
  let rowToGet = event.target.parentNode.parentNode.rowIndex - 1;

  const secondTable = document.createElement("table");
  wievKeyAndValue.appendChild(secondTable);
  const tableBody = document.createElement("tbody");

  Object.entries(currentModel[rowToGet]).forEach((key, value) => {
    const rowBody = document.createElement("tr");
    const cellBody = document.createElement("td");
    rowBody.appendChild(cellBody);
    const cellBodyContent = document.createTextNode(key);
    cellBody.appendChild(cellBodyContent);
    const cellBody1 = rowBody.insertCell(-1);
    const cellBodyContent1 = document.createTextNode(value);
    cellBody1.appendChild(cellBodyContent1);
    tableBody.appendChild(rowBody);
  });
  secondTable.appendChild(tableBody);

  return wievKeyAndValue;
}

function createTable() {
  const tabela = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const rowHead = document.createElement("tr");
  const nameId = document.createElement("td");
  const contentId = document.createTextNode(`id`);
  nameId.appendChild(contentId);
  rowHead.appendChild(nameId);

  Object.keys(currentModel[0]).forEach((key, index) => {
    if (index < 3) {
      const cellHead = document.createElement("td");
      const contentCell = document.createTextNode(key);
      cellHead.appendChild(contentCell);
      rowHead.appendChild(cellHead);
    }
  });
  const date = rowHead.insertCell(-1);
  date.innerHTML = "Created Ad";
  const action = rowHead.insertCell(-1);
  action.innerHTML = "Action";
  tableHead.appendChild(rowHead);
  tabela.appendChild(tableHead);

  for (let i = 0; i < currentModel.length; i++) {
    const rowBody = document.createElement("tr");
    const firstCellBody = document.createElement("td");
    const contentFirstCellBody = document.createTextNode(i + 1);
    firstCellBody.appendChild(contentFirstCellBody);
    rowBody.appendChild(firstCellBody);

    Object.values(currentModel[i]).forEach((value, index) => {
      if (index < 3) {
        const cellBody = document.createElement("td");
        const cellBodyContent = document.createTextNode(value);
        cellBody.appendChild(cellBodyContent);
        rowBody.appendChild(cellBody);
      }
    });
    const date = rowBody.insertCell(-1);
    const originalDate = currentModel[i].created;
    const dateObject = new Date(originalDate);
    const dates = dateObject.toLocaleDateString();
    date.innerHTML = dates; //data  toLocaleDateString
    const buttonActionCell = rowBody.insertCell(-1);
    let buttonActionPlus = document.createElement("button");
    buttonActionPlus.innerHTML = "+";
    buttonActionPlus.addEventListener("click", createNewWindow);
    buttonActionCell.appendChild(buttonActionPlus);

    const buttonActionBox = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    buttonActionBox.innerHTML = "kosz";
    buttonActionBox.appendChild(checkbox);
    buttonActionCell.appendChild(buttonActionBox);
    buttonActionBox.addEventListener("click", removeThisLine);
    checkbox.addEventListener("change", actionSelectCheckbox(event));

    tabela.appendChild(tableBody);

    tableBody.appendChild(rowBody);
  }

  return tabela;
}

function actionSelectCheckbox(event) {
  event.stopPropagation();
  const selectCheckbox = document.querySelectorAll("input[type=checkbox]");
  const removeSelectedLine = document.getElementById('removeSelectedLine')
  selectCheckbox.forEach(checkbox => {
    
      if (checkbox.checked) {
    removeSelectedLine.style.display='inline-block'
    }else{
      removeSelectedLine.style.display='none'
    }
  });
 
}

document.addEventListener(
  "click",
  function (event) {
    if (
      event.target.tagName === "button" &&
      event.target.innerHTML === "kosz"
    ) {
      removeThisLine(event);
    }

    if (event.target.type === "checkbox") {
      actionSelectCheckbox(event);
    }
  },
  true
);


function createNavTable() {
  
  const buttonArrowLeft = document.createElement("button");
  buttonArrowLeft.innerHTML = "<";
  displayNavTable.appendChild(buttonArrowLeft);
  const serchSite = document.createElement("input");
  serchSite.placeholder = 1;
  serchSite.size = 1;
  displayNavTable.appendChild(serchSite);
  const buttonArrowRight = document.createElement("button");
  buttonArrowRight.innerHTML = ">";
  displayNavTable.appendChild(buttonArrowRight);
  const selectPlace = document.getElementById("selectCountRow");
 
  selectPlace.innerHTML='';
  const selectElement = document.createElement("select");
  const option1 = document.createElement("option");
  option1.value = 10;
  option1.text = 10;
  selectElement.appendChild(option1);
  const option2 = document.createElement("option");
  option2.value = 20;
  option2.text = 20;
  selectElement.appendChild(option2);
  selectPlace.appendChild(selectElement);

  return displayNavTable;
}

function display(event) {
  const model = event.target.innerHTML;
  currentModel = data[model];
  displayTable.innerHTML = "";
  wievKeyAndValue.innerHTML = "";
  toggle.style.display = "none";
  wievKeyAndValue.style.display = "none";

  displayTable.appendChild(createTable());
  displayNavTable.innerHTML = "";
 displayNavTable.appendChild(createNavTable());
}
keys.forEach((key) => {
  const button = document.createElement("button");
  button.addEventListener("click", display);
  button.innerHTML = key;
  buttons.appendChild(button);
});
