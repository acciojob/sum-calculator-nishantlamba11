
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
      <h2>Sum Calculator</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={handleAddNumber} style={{ marginLeft: '1rem' }}>
        Add
      </button>
      <div style={{ marginTop: '1rem' }}>
        <strong>Numbers:</strong> {numbers.join(', ')}
      </div>
      <div style={{ marginTop: '1rem' }}>
        <strong>Sum:</strong> {sum}
      </div>
    </div>
  )
}

export default App
