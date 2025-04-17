function changeTable(tableId, columnIndex) {
    const table = document.getElementById(tableId);
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].cells;
        if (columnIndex >= 0 && columnIndex < cells.length) {
            rows[i].deleteCell(columnIndex);
        }
    }
}