import { useState, useEffect } from 'react';

import GetNumberImage from './GetNumberImage';
import styles from '../styles/CreateNumber.module.css';

export default function CreateNumber() {
  const initialFactors = [0, 0, 0, 0, 0, 0, 0];
  const initialMayanStack = [-1, -1, -1, -1, -1, -1, 0];
  const [mayanNumberStack, setMayanStack] = useState(initialMayanStack);
  const [mayanNumber, setMayanNumber] = useState(0);
  const [mayanNumberFactors, setMayanFactors] = useState(initialFactors);
  const numbers = [];
  for (let index = 0; index < 20; index += 1) {
    numbers.push(index);
  }

  const factors = [];
  for (let index = 6; index >= 0; index -= 1) {
    factors.push(20 ** index);
  }
  const formatter = new Intl.NumberFormat('en-CA');

  useEffect(() => {
    console.log(`effect: ${mayanNumberStack}`);
    setMayanNumber(mayanNumberFactors.reduce((a, b) => a + b, 0));
  }, [mayanNumberStack, mayanNumber, mayanNumberFactors]);

  function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.target);
    e.target.classList.add(styles.isDragging);
  }

  function handleDragEnd(e) {
    e.preventDefault();
    return false;
  }
  function handleDrop(e) {
    const id = e.dataTransfer.getData('text');
    const draggableElement = document.getElementById(id);
    draggableElement.classList.remove(styles.isDragging);
    const newNumber = draggableElement.dataset.number;
    const dropzone = e.target;
    const dropZoneIndex = dropzone.dataset.index;
    const tempArray = [...mayanNumberStack];
    tempArray[dropZoneIndex] = Number(newNumber);
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let index = dropZoneIndex; index < tempArray.length; index++) {
      if (tempArray[index] === -1) {
        tempArray[index] = 0;
      }
    }
    setMayanStack(tempArray);
    const tempFactors = [];
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    for (let index = 0; index < tempArray.length; index++) {
      if (tempArray[index] !== -1) {
        tempFactors[index] = factors[index] * tempArray[index];
      } else {
        tempFactors[index] = 0;
      }
    }
    setMayanFactors(tempFactors);

    // e.dataTransfer.clearData();
    e.preventDefault();
    return false;
  }

  function reset() {
    console.log('here');
    setMayanStack(initialMayanStack);
    setMayanFactors(initialFactors);
  }

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
                <div
                  className={styles.slot}
                  onDragOver={handleDragEnd}
                  onDrop={handleDrop}
                >
                  <GetNumberImage
                    numb={mayanNumberStack[index]}
                    size={4}
                    index={index}
                  />
                </div>
                <div className={styles.numbers}>
                  &times; {formatter.format(f)} ={' '}
                  {formatter.format(mayanNumberFactors[index])}
                </div>
              </li>
            ))}
          </ul>
          <div className="blurb">
            <strong>Total</strong>: {formatter.format(mayanNumber)}
          </div>
        </div>
        <ul className={styles.gridNumbers}>
          {numbers.map((num) => (
            <li key={`${num}factor`}>
              <div className={styles.draggable}>
                <GetNumberImage
                  numb={num}
                  size={4}
                  draggable
                  dragStartFunction={handleDragStart}
                />
                <br />
              </div>
              <div>
                <GetNumberImage numb={num} size={4} />
                <br />
              </div>

              {num}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.reset}>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </>
  );
}
