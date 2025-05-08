document.addEventListener("DOMContentLoaded", function () {
    const quotes = [
        "The best way to get started is to quit talking and begin doing. – Walt Disney",
        "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. – Winston Churchill",
        "Don’t let yesterday take up too much of today. – Will Rogers",
        "You learn more from failure than from success. Don’t let it stop you. Failure builds character. – Unknown",
        "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
        "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
        "Opportunities don’t happen. You create them. – Chris Grosser",
        "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
        "If you are not willing to risk the usual, you will have to settle for the ordinary. – Jim Rohn",
        "Success is not in what you have, but who you are. – Bo Bennett",
        "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
        "Success is walking from failure to failure with no loss of enthusiasm. – Winston S. Churchill",
        "Just when the caterpillar thought the world was over, it became a butterfly. – Proverb",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    ];

    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("random-quote").innerText = randomQuote;

    const words = ["focus", "finish", "work"];
    let index = 0;

    function changeWord() {
        const wordElement = document.getElementById("changing-word");
        wordElement.textContent = words[index];
        index = (index + 1) % words.length;
    }

    setInterval(changeWord, 2000); // Change word every 2 seconds
});