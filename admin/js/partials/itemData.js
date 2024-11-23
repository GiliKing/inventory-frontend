export const itemData = () => {
    const productName = $('#productName').val();
    const quantity = $('#quantity').val();
    const costPrice = $('#costPrice').val();
    const salesPrice = $('#salesPrice').val();
    const category = $('#menuSelect').val();
    const imageFile = $('#imageUpload')[0].files[0];
    if (!productName || !quantity || !costPrice || !salesPrice || !category || !imageFile) {
        alert(`All fields (product name, cost price, quantity, sales price, category, image) are required.`)
        return;
    }
    const formData = new FormData();
    formData.append('name', productName);
    formData.append('quantity', quantity);
    formData.append('cost_price', costPrice);
    formData.append('sales_price', salesPrice);
    formData.append('category_id', category);
    if (imageFile) {
        formData.append('image', imageFile);
    }
    document.querySelector("#saveButton").disabled = true;
    return formData;
}


export const clearItemData = () => {
    document.querySelector('#productName').value = '';
    document.querySelector('#quantity').value = '';
    document.querySelector('#costPrice').value = '';
    document.querySelector('#salesPrice').value = '';
    document.querySelector('#menuSelect').value = '';
    document.querySelector("#saveButton").disabled = false;
}
