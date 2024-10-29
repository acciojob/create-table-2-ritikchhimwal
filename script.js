function createTable() {
    // Get the number of rows and columns from user input
    const rn = prompt("Input number of rows");
    const cn = prompt("Input number of columns");

    // Convert user input to integers
    const rows = parseInt(rn);
    const columns = parseInt(cn);

    // Reference to the table
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create rows and cells
    for (let i = 0; i < rows; i++) {
        // Create a new row
        const row = table.insertRow(i);

        for (let j = 0; j < columns; j++) {
            // Create a new cell in the row
            const cell = row.insertCell(j);
            // Set the text for the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}

