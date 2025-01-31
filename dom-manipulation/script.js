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
}