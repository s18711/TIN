function myFunction() {
    const table = document.getElementById("myTable");
    const numberOfCellsAdded = document.getElementById("numberOfCells").value;
    const content = document.getElementById("content").value.split(";");
    const row = table.insertRow(0);
    for (let i = 0; i < numberOfCellsAdded; i++){
        let cell = row.insertCell(i);
        cell.innerHTML = content[i];
    }

}