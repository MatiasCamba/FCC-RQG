import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaQuoteLeft, FaQuoteRight,} from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuotes = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
const getRandomColor = (): string =>{
  const colors = [
    "#FFB6C1",
    "#87CEEB",
    "#98FB98",
    "#E6E6FA",
    "#FFFF99",
    "#FFDAB9",
    "#C0C0C0",
  ];
  const randomIndex = Math.floor( Math.random()* colors.length)
  return colors[randomIndex];
}

function App() {
  
  const [quote, setQuote] = useState<Quote>(getRandomQuotes());
  const [color,setColor] = useState<string>(getRandomColor());
  
  const changeQuote = () =>{
    setQuote(getRandomQuotes)
    setColor(getRandomColor)
  }

  return (
    <div className="container" style={{backgroundColor: color}}>
    <div id="quote-box">
      <h1>Random Quote Generator</h1>
      <div className="quote-content">
        <FaQuoteLeft size={20}/>
        <h2 id="text">{quote.quote}</h2>
        <FaQuoteRight size={20} />
        <p id="author">- {quote.author}</p>
      </div>
      <div className="button-container">
        <a href="twitter.com/intent/tweet" id="tweet-quote">
        <TiSocialTwitter size={30} style={{color:"black"}}/>
        </a>
        <button id="new-quote" onClick={changeQuote}>
          Change Quote!
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
