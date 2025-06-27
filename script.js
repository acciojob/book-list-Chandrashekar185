//your JS code here. If required.
document.getElementById('submit').addEventListener('click', function() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title && author && isbn) {
        const tableBody = document.getElementById('book-list');
        const newRow = tableBody.insertRow();

        newRow.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Delete</button></td>
        `;

        // Clear input fields
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';

        // Add event listener for delete button
        newRow.querySelector('.delete').addEventListener('click', function() {
            tableBody.deleteRow(newRow.rowIndex - 1); // Adjust index for tbody
        });
    } else {
        alert('Please fill all fields');
    }
});