const counterOnly = () => {
    // Select elements
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const counterValue = document.getElementById('counterValue');
    let count = 0;
    incrementButton.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
    });
    decrementButton.addEventListener('click', () => {
        if(count > 0) {
            count--;
            counterValue.textContent = count;
        }
    });
}

export default counterOnly;