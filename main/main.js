var btn = document.getElementById('btn');
var output = document.getElementById('output');
var quotes = [
    '“Be yourself; everyone else is already taken.” ― Oscar Wilde',
    '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.” ― Albert Einstein',
    '“So many books, so little time.” ― Frank Zappa',
    '“A room without books is like a body without a soul.” ― Marcus Tullius Cicero',
    '“Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.” ― Bernard M. Baruch',
    '“You know youre in love when you cant fall asleep because reality is finally better than your dreams.” ― Dr. Seuss',
    '“If you tell the truth, you dont have to remember anything.” ― Mark Twain'
];

function printText(){
        var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        output.innerHTML = randomQuote ;
}