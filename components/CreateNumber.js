import { useState } from 'react';
import GetNumberImage from './GetNumberImage';
import styles from '../styles/CreateNumber.module.css';

export default function CreateNumber() {
  const [mayanNumberStack, setMayanStack] = useState([0]);
  const [mayanNumber, setMayanNumber] = useState(0);
  const numbers = [];
  for (let index = 0; index < 20; index += 1) {
    numbers.push(index);
  }
  const factors = [];
  for (let index = 6; index >= 0; index -= 1) {
    factors.push(20 ** index);
  }
  const formatter = new Intl.NumberFormat('en-CA');

  return (
    <>
      <p className="blurb">
        To create a number, drag a symbol into a slot. To replace a number, drag
        a different number on top of it.
      </p>
      <div className={styles.grid}>
        <div>
          <ul className={styles.slots}>
            {factors.map((f, index) => (
              <li key={`${f}factor`}>
                <div className={styles.slot}>
                  <GetNumberImage num={index} size={4} />
                </div>
                <div>&times; {formatter.format(f)} = </div>
              </li>
            ))}
          </ul>
          <div>
            <strong>Total</strong>: {mayanNumber}
          </div>
        </div>
        <ul className={styles.gridNumbers}>
          {numbers.map((num) => (
            <li key={`${num}number`}>
              <GetNumberImage numb={num} size={4} />
              <br />
              {num}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
