const quotes = [
    "“HARD WORK IS WORTHLESS FOR THOSE THAT DON’T BELIEVE IN THEMSELVES.“",
    "'IF YOU DON’T LIKE THE HAND THAT FATE’S DEALT YOU WITH, FIGHT FOR A NEW ONE.'",
    "'THE MOMENT PEOPLE COME TO KNOW LOVE, THEY RUN THE RISK OF CARRYING HATE.'",
    "'A SMILE IS THE EASIEST WAY OUT OF A DIFFICULT SITUATION.",
    "FAILING DOESN’T GIVE YOU A REASON TO GIVE UP, AS LONG AS YOU BELIEVE'",
    "'THOSE WHO FORGIVE THEMSELVES, AND ARE ABLE TO ACCEPT THEIR TRUE NATURE… THEY ARE THE STRONG ONES!'",
    "'IT’S HUMAN NATURE NOT TO REALIZE THE TRUE VALUE OF SOMETHING, UNLESS THEY LOSE IT.'",
    "'No single thing is perfect by itself. That’s why we’re born to attract other things to make up for what we lack. I think we start walking in the right direction only after we start getting our counterparts beside us.'",
    "'Sometimes you must hurt in order to know, fall in order to grow, lose in order to gain because life’s greatest lessons are learned through pain.'",
    "'The longer you live… The more you realize that reality is just made of pain, suffering, and emptiness.'",
]

const authors = [
    "Naruto Uzumaki",
    "Naruto Uzumaki",
    "OBITO UCHIHA",
    "SAKURA HARUNO",
    "ITACHI UCHIHA",
    "OROCHIMARU",
    "Itachi Uchiha",
    "Pain",
    "Madara Uchiha"

]
function newQuote(){
    let randomNumber = Math.floor(Math.random() * (quotes.length));
   

    document.getElementById("quotes").innerHTML = quotes[randomNumber];
  


}

