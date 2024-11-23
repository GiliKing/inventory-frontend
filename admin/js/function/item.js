const displayItems = (data) => {
    const items = data.items;
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.sku}</td>
            <td>${element.name}</td>
            <td>₦${element.cost_price}</td>
            <td>₦${element.sales_price}</td>
            <td>${element.quantity}</td>
            <td>${element.category_name}</td>
            <td>${formatDate(element.timestamp)}</td>
            <td>
                <img src="./asset/edit.svg" alt="edit">
                <img src="./asset/trash.png" alt="edit">
            </td>
        `;
        tableBody.appendChild(row);
    }
}

function formatDate(timestamp) {
    const date = new Date(timestamp);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}:${String(date.getSeconds()).padStart(2, '0')}`;
}

export default displayItems;