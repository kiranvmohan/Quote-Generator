import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const App = () => {
  const [quote, setQuote] = useState("It's always  you");
  const [author, setAuthor] = useState("unknown");

  
  const fetchQuote = async () => {
    const response = await axios.get('https://dummyjson.com/quotes'); 
    const randomQuote = response.data.quotes[Math.floor(Math.random() * response.data.quotes.length)];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  };

  return (
    <div className="container">
      <div className="quotebox">
      <h1>Quote Generator</h1>
      <br />
      <p className='quote-text'>'{quote}'</p>
      <p className='quote-author'> - {author}</p>
      
      <div className='btn'>
      <Button variant="outline-light" onClick={fetchQuote}>Next</Button> 
      </div>
      
      </div>
     
    </div>
  );
};

export default App;


