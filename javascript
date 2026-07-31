// Wait until the HTML document is fully loaded before running script
document.addEventListener("DOMContentLoaded", () => {
    
    // Select our button and secret message element using their IDs
    const button = document.getElementById("magicButton");
    const message = document.getElementById("secretMessage");

    // Add a click event listener to the button
    button.addEventListener("click", () => {
        // Toggle the hidden class on and off
        message.classList.toggle("hidden");

        // Change the text content dynamically
        if (message.classList.contains("hidden")) {
            button.textContent = "Click to see my favorite quote!";
        } else {
            message.textContent = "✨ 'The best way to predict the future is to create it.' ✨";
            button.textContent = "Hide Quote";
        }
    });
});
