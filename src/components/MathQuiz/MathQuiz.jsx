import { useState } from "react";
import Answer from "../Answer/Answer";
import styles from "./MathQuiz.module.css";

export default function MathQuiz() {
  const [point, setPoint] = useState(0);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function updatePoints() {
    setPoint(point + 1);
  }

  let num1 = getRandomNumber(1, 100);
  let num2 = getRandomNumber(1, 100);

  return (
    <div className={styles.container}>
      <h2 className={styles.score}>Ваши очки: {point}</h2>
      <h2>
        {num1} + {num2} = ?
      </h2>
      <Answer updatePoints={updatePoints} num1={num1} num2={num2} />
    </div>
  );
}
