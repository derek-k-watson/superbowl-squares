import React from "react";
import styles from "./Button.module.scss";
import { Button as BSButton } from "react-bootstrap";

export default function Button(props) {
  return (
    <BSButton
      className={`${props.className && props.className} ${styles.customBtn}`}
      {...props}
    />
  );
}
