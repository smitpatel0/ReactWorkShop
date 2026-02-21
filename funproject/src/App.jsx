import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

function App(){
  const [count, setCount] = useState(0);
  return(
    <button onClick={() => setCount(count + 1)}>
      count is {count}
    </button>
  )
}*/
function App() {
  const API_URL = import.meta.env.VITE_API_URL || 'https://uselessfacts.jsph.pl/api/v2/facts/random';
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}?language=en`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setFact(data.text || JSON.stringify(data));
    } catch (e) {
      setError(e.message);
      setFact(null);
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount
  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Random Useless Fact</h1>

      <div className="card">
        {loading && <p>Loading…</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {fact && <p>{fact}</p>}
        <button onClick={fetchFact}>Get another fact</button>
      </div>

      <p className="read-the-docs">Click the button to fetch a new fact.</p>
    </div>
  );
}

export default App;