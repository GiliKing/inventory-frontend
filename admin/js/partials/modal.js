const uploadImage = () => {
    const modal = document.querySelector('.good-modal-four');
    modal.addEventListener('click', () => {
        $('#imageUpload').click();
    });
    $('#imageUpload').on('change', function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const imagePreview = document.querySelector('#imagePreview');
                imagePreview.style.backgroundImage = `url(${e.target.result})`;
                imagePreview.style.backgroundRepeat = 'no-repeat';
                imagePreview.style.backgroundSize = 'contain';
                imagePreview.style.backgroundPosition = 'center';
            };
            reader.readAsDataURL(file); 
        }
    });
}


export default uploadImage;