function generateRandomNumber() {
    const randomNumber = Math.round(Math.random() * 10) + 1;
    
    const display = document.getElementById('numberDisplay');
    display.textContent = randomNumber;
    
}

window.onload = generateRandomNumber;