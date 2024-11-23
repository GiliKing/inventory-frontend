import { displayCatgeories } from "./function/category.js";
import displayItems from "./function/item.js";
import { itemData, clearItemData } from "./partials/itemData.js";
import uploadImage from "./partials/modal.js";

const proxy = 'https://inventory-backend-fwoj.onrender.com/api'


// get the item table
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
})

// submit item
$(document).ready(function () {
    // get category
    $('#open-modal').on('click', function () {
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

    // show the image
    uploadImage();

    // Handle form submission
    $('#saveButton').on('click', function () {
        // validate data
        const itemdata = itemData();
        if(itemdata) {
            $.ajax({
                url: `${proxy}/items`, // Replace with your endpoint
                method: 'POST',
                data: itemdata,
                processData: false,
                contentType: false,
                success: function (response) {
                    alert('Data submitted successfully!');
                    clearItemData()
                    console.log(response);
                    // window.location.href = "/admin/inventory.html";
                },
                error: function (xhr) {
                    const error = JSON.parse(xhr.responseText)
                    alert(`Something went wrong: ${error.message}`);
                    clearItemData()
                    console.error(xhr.responseText);
                }
            });
        }
    });
});
