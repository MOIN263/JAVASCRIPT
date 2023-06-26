// Function to display the model name of a car
function showModelName(modelName) {
    var message = "Model: " + modelName;
    alert(message);
}

// Add event listeners to the buttons
document.getElementById('button1').addEventListener('click', function() {
    showModelName('INNOVA CRYSTA');
});

document.getElementById('button2').addEventListener('click', function() {
    showModelName('ENDEAVOUR');
});

document.getElementById('button3').addEventListener('click', function() {
    showModelName('CIVIC');
});
