export const displayCatgeories = (data) => {
    const categories = data.categories;
    const linkDiv = document.querySelector('.link');
    linkDiv.innerHTML = '';
    categories.forEach((category) => {
        const link = document.createElement('a');
        link.href = `/category.html?cat_id=${category.id}`;
        link.textContent = category.name;
        link.classList.add('btn');
        linkDiv.appendChild(link);
    });
}  

export const displayCatgeoriesAgain = (data) => {
    const categories = data.categories;
    const great = document.querySelector('.great');
    great.innerHTML = '';
    categories.forEach((category) => {
        const link = document.createElement('a');
        link.href = `#`;
        link.onclick = () => getItems(category.id);
        link.textContent = category.name;
        link.classList.add('cat');
        great.appendChild(link);
    });
}   

const getItems = (data) => {
    const proxy = 'https://inventory-backend-fwoj.onrender.com/api'
    // alert(data); 
    $.ajax({
        url: `${proxy}/items?cat_id=${data}`,
        method: 'GET',
        success: function (response) {
            displayItems(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
}

export const displayItems = (data) => {
    const items = data.items;
    const rollow = document.querySelector('.rollow');
    const change = document.getElementById('change');
    rollow.innerHTML = '';
    change.innerText = items.length ? items[0].category_name : '';

    items.forEach((element) => {
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4');

        // Create a div for the image and set the click event dynamically
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image');
        imageDiv.dataset.bsToggle = 'modal';
        imageDiv.dataset.bsTarget = '#exampleModal';
        imageDiv.onclick = () => modalView(element.image, element.name, element.sales_price, element.quantity, element.id);

        const img = document.createElement('img');
        img.src = element.image;
        img.alt = element.name;
        imageDiv.appendChild(img);

        // Create name and price elements
        const nameP = document.createElement('p');
        nameP.classList.add('p-one');
        nameP.innerText = element.name;
        nameP.dataset.bsToggle = 'modal';
        nameP.dataset.bsTarget = '#exampleModal';
        nameP.onclick = () => modalView(element.image, element.name, element.sales_price, element.quantity, element.id);

        const priceP = document.createElement('p');
        priceP.classList.add('p-two');
        priceP.innerText = `₦${element.sales_price}`;
        priceP.dataset.bsToggle = 'modal';
        priceP.dataset.bsTarget = '#exampleModal';
        priceP.onclick = () => modalView(element.image, element.name, element.sales_price, element.quantity, element.id);

        // Append elements to the column div
        colDiv.appendChild(imageDiv);
        colDiv.appendChild(nameP);
        colDiv.appendChild(priceP);

        rollow.appendChild(colDiv);
    });
};

const modalView = (image, name, price, quantity, id) => {
    const buyImage = document.getElementById('buyImage');
    const buyName = document.getElementById('buyName');
    const buyPrice = document.getElementById('buyPrice');
    const itemId = document.getElementById('itemId');

    // Update modal content
    buyImage.src = image;
    buyName.innerText = name;
    buyPrice.innerText = `₦${price}`;
    itemId.value = id;
};
