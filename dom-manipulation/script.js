const quotes = [
    {text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    {text: "Life is what happens when you're busy making other plans.", category: "Life"},
    {text: "Do what you can, with what you have, where you are.", category: "Perseverance"}
];

function showRandomQuote(){
    const quoteDisplay = document.getElementById("quoteDisplay");

    if (quotes.length === 0){
        quoteDisplay.innerText = "No quotes available.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    quoteDisplay.innerHTML = `<p><strong>${quote.text}</strong> - <em>${quote.category}</em></P>`;
};

document.getElementById("newQuote").addEventListener("click", showRandomQuote);

function createAddQuoteForm() {
    // Create form container
    const formContainer = document.createElement("div");

    // Create input for quote text
    const quoteInput = document.createElement("input");
    quoteInput.type = "text";
    quoteInput.id = "newQuoteText";
    quoteInput.placeholder = "Enter a new quote";

    // Create input for category
    const categoryInput = document.createElement("input");
    categoryInput.type = "text";
    categoryInput.id = "newQuoteCategory";
    categoryInput.placeholder = "Enter quote category";

    // Create Add Quote button
    const addButton = document.createElement("button");
    addButton.innerText = "Add Quote";
    addButton.onclick = addQuote; // Attach the addQuote function

    // Append elements to form container
    formContainer.appendChild(quoteInput);
    formContainer.appendChild(categoryInput);
    formContainer.appendChild(addButton);

    // Append form to body or a specific div
    document.body.appendChild(formContainer);
}

window.onload = function() {
    createAddQuoteForm(); // This will add the form when the page loads
};

function addQuote(){
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (newQuoteText === " " || newQuoteCategory === " "){
        alert("Please enter both a quote and a category.");
        return;
    }
    
    quotes.push({text: newQuoteCategory, category: newQuoteCategory});
    document.getElementById("newQuoteText").value = " ";
    document.getElementById("newQuoteCategory").value = " ";
    alert("Quote added successfully!");

    showRandomQuote();
};