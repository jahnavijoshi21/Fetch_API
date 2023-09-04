// const quoteContainer = document.getElementById('quote-conatainer')
// const quoteText = document.getElementById('quote')
// const authorBtn = document.getElementById('author')
// const twitterBtn = document.getElementById('twitter')
// const newQuoteBtn = document.getElementById('new-quote')



// let apiQuotes = [];

// //show new quote 
// function newQuote() {
//   //pick a random quote from api quotes array
//   const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   // console.log(quote);

// if (!quote.author) {
//   authorText.textcontent = "Unknown";
// }
// else {
//   quoteText.textContent = quote.author
// }

// if(quote.text.length>50){
//   quoteText.classList.add('long-quote');
// }
// else{
//   quoteText.classList.remove('long-quote')
// }
//   authorText.textContent = quote.author;
//   quoteText.textContent = quote.text;
// }
//  //get quotes from api 
// async function getQuotes() {
//   const apiUrl = 'https://api.quotable.io/random';
//   try {
//     const response = await fetch(apiUrl)
//     apiQuotes = await response.json();
//     console.log(apiQuotes);
//   } catch (error) {

//   }
// }
// getQuotes();



// const getQuotes = async () => {
//     const api =""
//     try {
//         let data = await fetch(api);
//         let realData = await data.json();
//         console.log(realData);

//     } catch (error) {
//     }
// };
//getQuotes();



// const localQuotes= [
//     {
//       "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
//       "author": "Thomas Edison",
//     },
//     {
//       "text": "You can observe a lot just by watching.",
//       "author": "Yogi Berra",
//     },
//     {
//       "text": "A house divided against itself cannot stand.",
//       "author": "Abraham Lincoln",
//     },
//     {
//       "text": "Difficulties increase the nearer we get to the goal.",
//       "author": "Johann Wolfgang von Goethe",
//     },
//     {
//       "text": "Fate is in your hands and no one elses",
//       "author": "Byron Pulsifer",
//     },
//     {
//       "text": "Be the chief but never the lord.",
//       "author": "Lao Tzu",
//     },
//     {
//       "text": "Nothing happens unless first we dream.",
//       "author": "Carl Sandburg",
//     },
//     {
//       "text": "Well begun is half done.",
//       "author": "Aristotle",
//     },
//     {
//       "text": "Life is a learning experience, only if you learn.",
//       "author": "Yogi Berra"
//     },
//     {
//       "text": "Self-complacency is fatal to progress.",
//       "author": "Margaret Sangster",
//     },
//     {
//       "text": "Peace comes from within. Do not seek it without.",
//       "author": "Buddha",
//     },
//     {
//       "text": "What you give is what you get.",
//       "author": "Byron Pulsifer",
//     },
//     {
//       "text": "We can only learn to love by loving.",
 //  "author": "Iris Murdoch",
//     },
//     {
//       "text": "Life is change. Growth is optional. Choose wisely.",
//       "author": "Karen Clark",
//     },
//     {
//       "text": "You'll see it when you believe it.",
//       "author": "Wayne Dyer",
//     },
//     {
//       "text": "Today is the tomorrow we worried about yesterday.",
//       "author":  null
//     }
//   ]
// function newQuote(){
//     //pick a random quote from api quotes array
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);

// }
// newQuote();































