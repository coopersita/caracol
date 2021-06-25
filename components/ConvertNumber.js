import { useState } from 'react';
import GetNumberImage from './GetNumberImage';
import styles from '../styles/ConvertNumber.module.css';

export default function CreateNumber() {
  const base = 20;
  const [passedNumber, setNumber] = useState(0);
  const [mayanNumberStack, setMayanStack] = useState([0]);

  function getExponent(val) {
    let accumulated = 0;
    let exp = 0;
    if (val < base) {
      return 0;
    }
    while (accumulated <= val) {
      exp += 1;
      accumulated = base ** exp;
    }
    return exp - 1;
  }

  function getNumberStack(value, exp) {
    const numbers = [];
    let temp = value;
    for (let index = exp; index >= 0; index -= 1) {
      const expNumber = base ** index;
      const excedent = Math.floor(temp / expNumber);
      temp -= expNumber * excedent;
      numbers.push(excedent);
    }

    return numbers;
  }

  function handleChange(e) {
    const value = parseInt(e.target.value);
    const stack = getNumberStack(value, getExponent(value));
    setMayanStack(Number.isNaN(value) ? [0] : stack);
    setNumber(Number.isNaN(value) ? 0 : value);
  }

  return (
    <>
      <div className={styles.grid}>
        <label htmlFor="createNumber" className="blurb">
          Enter a number :
          <br />
          <input
            id="createNumber"
            name="number"
            type="number"
            min="0"
            required
            value={passedNumber}
            onChange={handleChange}
          />
        </label>
        <ul>
          {mayanNumberStack.map((num, index) => (
            <li key={index}>
              <GetNumberImage numb={num} />
              <div>
                <span className="blurb">
                  {num * base ** (mayanNumberStack.length - index - 1)}
                </span>
                <br />
                <b>
                  {base}
                  <sup>{mayanNumberStack.length - index - 1}</sup>:{' '}
                </b>
                {base ** (mayanNumberStack.length - index - 1)} &times; {num}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
