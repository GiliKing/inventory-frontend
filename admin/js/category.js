import { getCategories } from "./function/category.js";
import { categoryData, clearCategoryData } from "./partials/categoryData.js";

const proxy = 'https://inventory-backend-fwoj.onrender.com/api'
// get the item table
window.addEventListener('load', () => {
    $.ajax({
        url: `${proxy}/categories`,
        method: 'GET',
        success: function (response) {
            getCategories(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
})

// submit category
$(document).ready(function () {
    // Handle form submission
    $('#saveButton').on('click', function () {
        const category_data = categoryData();
        if(category_data) {
            $.ajax({
                url: `${proxy}/categories`,
                method: 'POST',
                data: JSON.stringify(category_data),
                processData: false,
                contentType: 'application/json',
                success: function (response) {
                    alert('Data submitted successfully!');
                    clearCategoryData()
                    window.location.href = "/admin/category.html";
                },
                error: function (xhr) {
                    const error = JSON.parse(xhr.responseText)
                    alert(`Something went wrong: ${error.message}`);
                    clearCategoryData()
                    console.error(xhr.responseText);
                }
            });
        }
    });
});