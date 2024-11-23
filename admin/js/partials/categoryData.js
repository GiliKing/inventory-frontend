export const categoryData = () => {
    const name = $('#name').val();
    if (!name) {
        alert(`Category name field is required.`)
        return;
    }
    const data = {name: name};
    document.querySelector("#saveButton").disabled = true;
    return data;
}


export const clearCategoryData = () => {
    document.querySelector('#name').value = '';
    document.querySelector("#saveButton").disabled = false;
}
