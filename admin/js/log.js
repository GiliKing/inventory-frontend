import getLogs from "./function/log.js";

const proxy = 'https://inventory-backend-fwoj.onrender.com/api'
// get the item table
window.addEventListener('load', () => {
    $.ajax({
        url: `${proxy}/logs`,
        method: 'GET',
        success: function (response) {
            getLogs(response);
        },
        error: function (xhr) {
            // alert('Something went wrong!');
            console.error(xhr.responseText);
        }
    });
})

// submit category
$(document).ready(function () {
    const actionType = document.querySelector('#menect');
    actionType.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        if(selectedValue.length !== 0) {
            $.ajax({
                url: `${proxy}/logs?action_type=${selectedValue}`,
                method: 'GET',
                success: function (response) {
                    getLogs(response);
                },
                error: function (xhr) {
                    console.error(xhr.responseText);
                }
            });
        }
    });
    
});