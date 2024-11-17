document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('#divisorTable tbody');

    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        const numCell = document.createElement('td');
        const divisibleCell = document.createElement('td');

        numCell.textContent = i;
        divisibleCell.textContent = (i % 2 === 0) ? 'Sí' : 'No';

        row.appendChild(numCell);
        row.appendChild(divisibleCell);
        tableBody.appendChild(row);
    }
});
