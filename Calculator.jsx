import React, { useState } from 'react';
import './IOD/Module_6/first-react-app/Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    let res;
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    switch (operator) {
      case '+':
        res = number1 + number2;
        break;
      case '-':
        res = number1 - number2;
        break;
      case '*':
        res = number1 * number2;
        break;
      case '/':
        res = number1 / number2;
        break;
      default:
        res = 'Invalid operator';
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Operator (+, -, *, /)"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        />
        <input
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && (
        <div className="result">
          <h2>Result: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;
