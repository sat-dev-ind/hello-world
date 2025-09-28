import { useState } from 'react'

function App() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGreeting(`Hello ${name}`);
  };

  return (
    <div className="app-container">
      <h1>Hello Input App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          aria-label="Name input"
          data-testid="name-input"
        />
        <button type="submit" data-testid="submit-button">Submit</button>
      </form>
      {greeting && <div className="greeting" data-testid="greeting">{greeting}</div>}
    </div>
  )
}

export default App