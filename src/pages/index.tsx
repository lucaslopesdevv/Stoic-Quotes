import axios from "axios";
import { useState } from "react";

export function StoicPage() {
  const [author, setAuthor] = useState<string>();
  const [quote, setQuote] = useState<string>();

  async function pegarDados() {
    const response = await axios.get(
      "https://api.themotivate365.com/stoic-quote"
    );
    setAuthor(response.data.author);
    setQuote(response.data.quote);
  }
  return (
    <>
      <h1>Super Stoic Quotes</h1>
      <div className="card">
        <button onClick={pegarDados}>Seja Estoico!!!</button>
      </div>
      <div className="author-container">
        <label htmlFor="author">Author: </label>
        <strong>
          <span>{author}</span>
        </strong>
      </div>
      <br />
      <div className="quote-container">
        <label htmlFor="quote">Quote: </label>
        <strong>
          <span>{quote}</span>
        </strong>
      </div>
    </>
  );
}
