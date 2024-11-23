const displayItems = (data) => {
    const items = data.items;
    const rollow = document.querySelector('.rollow');
    rollow.innerHTML = '';
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-6');
        colDiv.innerHTML = `
            <div class="image">
                <img src="${element.image}" alt="${element.name}">
            </div>
            <p class="p-one">${element.name}</p>
            <p class="p-two">₦${element.sales_price}</p>
        `;
        rollow.appendChild(colDiv);
    }
};


export default displayItems;