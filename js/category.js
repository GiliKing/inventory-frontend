import { displayCatgeoriesAgain, displayItems } from "./function/category.js";
import counterOnly from "./partials/counter.js";
import getParam from "./partials/url.js";

const proxy = 'https://inventory-backend-fwoj.onrender.com/api' 

// get the item
window.addEventListener('load', () => {
    $.ajax({
        url: `${proxy}/categories`,
        method: 'GET',
        success: function (response) {
            displayCatgeoriesAgain(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
    $.ajax({
        url: `${proxy}/items?cat_id=${getParam()}`,
        method: 'GET',
        success: function (response) {
            displayItems(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
})


$(document).ready(function () {
    counterOnly();
    const buyButton = document.getElementById('buyButton');
    buyButton.addEventListener('click', () => {
        const changeQuantity = document.getElementById('counterValue').innerHTML;
        const itemId = document.getElementById('itemId').value;
        const data = {id : parseInt(itemId), quantity: parseInt(changeQuantity)};
        $.ajax({
            url: `${proxy}/items/update`,
            method: 'POST',
            data: JSON.stringify(data),
            processData: false,
            contentType: 'application/json',
            success: function (response) {
                alert('Purchased successfully!');
            },
            error: function (xhr) {
                const error = JSON.parse(xhr.responseText)
                alert(`Something went wrong: ${error.message}`);
                console.error(xhr.responseText);
            }
        });
    })

})