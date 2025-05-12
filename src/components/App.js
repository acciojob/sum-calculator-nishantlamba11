
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

  const [inputValue, setInputValue] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNumber = () => {
    const parsed = parseInt(inputValue, 10);
    if (!isNaN(parsed)) {
      const updatedNumbers = [...numbers, parsed];
      setNumbers(updatedNumbers);
      setInputValue('');

      // Asynchronous sum update to keep UI responsive
      setTimeout(() => {
        const total = updatedNumbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }, 0);
    }
  };
  
  return (
     <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber} style={{ marginLeft: '1rem' }}>
        Add
      </button>
      <p style={{ marginTop: '1rem' }}>
        <strong>Numbers:</strong> {numbers.join(', ')}
      </p>
      <p style={{ marginTop: '1rem' }}>
        <strong>Sum:</strong> {sum}
      </p>
    </div>
  )
}

export default App
