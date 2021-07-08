// first three deliverables only

document.addEventListener('DOMContentLoaded', callFunction)

// I did form opposite to what was asked
// form should populate with data
function callFunction() {
    console.log('call function here')
    fetchDogInfo()
    document.getElementById('dog-form').addEventListener('sumbit', (e) => {
        e.preventDefault()
        console.log('hello from form')
        let nameValue = document.getElementById('dog-form').value
        console.log(nameValue)

    })
}

function appendDog() {
    console.log('hello from append dog')
}

function fetchDogInfo() {
    console.log('hello from fetchDogInfo')
    fetch(`http://localhost:3000/dogs`)
    .then(res => res.json())
    .then(data => addRow(data)) // great success
}
 
// renderDog will extract information about the dog
// each bit of information will be appended to the relavent table column
    // table can be accessed as ID table-body (works)
// this will all happen in a forEach loop

function addRow(data) {
    console.log('hello from add row')
    
    let tableObject = document.getElementById('table-body')
    let row = tableObject.insertRow(-1)
    let cellName = row.insertCell(0)
    let cellBreed = row.insertCell(1)
    let cellSex = row.insertCell(2)
    let cellEdit = row.insertCell(3)

    cellName.innerText = "name 1"
    cellBreed.innerText = "breed 2"
    cellSex.innerText = "sex 3"
    cellEdit.innerText = "Edit 4"

    console.log(data[1].name) 
    data.forEach(e > console.log(data[e].name))
     

}

function renderDog(data) {
    console.log('hello from render dog')
    let tableRef = document.getElementById('table-body')

    let newRow = tableRef.insertRow(-1)

    let newCell = newRow.insertCell(0)

    let newText = document.createTextNode('hello new bootom row', 'breed')
    newCell.appendChild(newText)
    // src: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow

    console.log('hello from render dog')

    newRow = tableRef.insertRow(-1)

    newCell = newRow.insertCell(0)

    newText = document.createTextNode('hello exta new bottom row', 'breed')
    newCell.appendChild(newText)
    // src: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
}

// this one can add to a column
function renderDog2(data) {
    console.log('hello from render dog')
    let tableRef = document.getElementById('tDogSex')

    let newRow = tableRef.insertRow(-1)

    let newCell = newRow.insertCell(0)

    let newText = document.createTextNode('hello new bottom row', 'breed')
    newCell.appendChild(newText)
    // src: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/insertRow
}


// function addRow(tableID) {
//     // Get a reference to the table
//     let tableRef = document.getElementById(tableID);
  
//     // Insert a row at the end of the table
//     let newRow = tableRef.insertRow(-1);
  
//     // Insert a cell in the row at index 0
//     let newCell = newRow.insertCell(0);
  
//     // Append a text node to the cell
//     let newText = document.createTextNode('New bottom row');
//     newCell.appendChild(newText);
//   }
  
//   // Call addRow() with the table's ID
//   addRow('my-table');