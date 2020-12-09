import React, { useState } from "react";
import styles from "./Square.module.scss";

export default function Square({initials, onSecondClick, hasGameStarted, ...props}) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [squareText, setSquareText] = useState("");

  const handleAddInitials = () => {
    setSquareText(initials);
    setHasBeenClicked(true);
  }

  const handleReset = () => {
      setSquareText("");
      setHasBeenClicked(false);
  }

//   let finalOnClick = hasBeenClicked ? hasGameStarted ? onSecondClick : handleReset : handleAddInitials;
  let finalOnClick = hasGameStarted ? hasBeenClicked ? onSecondClick : null : hasBeenClicked ? handleReset : handleAddInitials;

  return (
    <td className={styles.square} onClick={finalOnClick} {...props}>
      {squareText}
    </td>
  );
}
