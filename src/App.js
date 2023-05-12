import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import refreshIcon from './assets/refresh.png'

function App() {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);


  const fetchFact = () => {
    setLoading(true);
    axios.get("https://catfact.ninja/fact").then((res) => {
      setFact(res.data.fact);
      setLoading(false);
    });
  };
  
  const handleToggle = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    fetchFact();
  }, []);

  const handleRefresh = () => {
    fetchFact();
  };
  return (
    <div className="container">
      <h1>Cat Fact</h1>
      {loading ? 
      (<div className="loader">
        <div className="dot-loader"></div>
        <div className="dot-loader dot-loader--2"></div>
        <div className="dot-loader dot-loader--3"></div>
      </div>):(<p>"{fact}"</p>)
      
      }
      <button onClick={handleRefresh}><img src={refreshIcon} alt="refresh button" /></button>
    </div>
  );
}

export default App;
