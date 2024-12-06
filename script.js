// Get references to the button and message element
const actionButton = document.getElementById('actionButton');
const outputMessage = document.getElementById('outputMessage');

// Add a click event listener to the button
actionButton.addEventListener('click', () => {
    outputMessage.textContent = 'Hello! You clicked the button!';
    outputMessage.style.color = '#4CAF50';
});
