const quotes = [
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" }
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

document.getElementById('new-quote-btn').addEventListener('click', () => {
    const randomQuote = getRandomQuote();
    document.getElementById('quote').textContent = `"${randomQuote.text}"`;
    document.getElementById('author').textContent = `- ${randomQuote.author}`;
});
