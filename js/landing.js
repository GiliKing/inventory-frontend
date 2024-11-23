import { displayCatgeories } from "./function/category.js";
import displayItems from "./function/item.js";

const proxy = 'https://inventory-backend-fwoj.onrender.com/api'


// get the item
window.addEventListener('load', () => {
    $.ajax({
        url: `${proxy}/items`,
        method: 'GET',
        success: function (response) {
            displayItems(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });

    $.ajax({
        url: `${proxy}/categories`,
        method: 'GET',
        success: function (response) {
            displayCatgeories(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
})
