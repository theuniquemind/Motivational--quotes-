const quotes = [
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Believe you can and you’re halfway there." - Theodore Roosevelt',
    '"Act as if what you do makes a difference. It does." - William James',
    '"What lies behind us and what lies before us are tiny matters compared to what lies within us." - Ralph Waldo Emerson'
];

const quoteText = document.getElementById('quote');
const button = document.getElementById('new-quote');

button.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});
