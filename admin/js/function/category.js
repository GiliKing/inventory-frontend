
export const displayCatgeories = (data) => {
    const categories = data.categories;
    const select = document.querySelector('#menuSelect');
    select.innerHTML = '';
    const first = document.createElement('option');
    first.value = 0;
    first.textContent = 'Category';
    select.appendChild(first)
    for (let index = 0; index < categories.length; index++) {
        const element = categories[index];
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.name;
        select.appendChild(option)
    }
}   

export const getCategories = (data) => {
    const categories = data.categories;
    const tableBody = document.querySelector('#tableBody');
    tableBody.innerHTML = '';
    for (let index = 0; index < categories.length; index++) {
        const element = categories[index];
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${element.name}</td>
            <td>
                <img src="./asset/edit.svg" alt="edit">
                <img src="./asset/trash.png" alt="edit">
            </td>
        `;
        tableBody.appendChild(row);
    }
}