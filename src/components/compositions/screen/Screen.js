import React from "react";

import Card from "choom/lib/components/card/Card";

import styles from "./screen.module.css";

const Screen = ({ children }) => {
  return (
    <Card padding="1" className={styles.root}>
      {children}
    </Card>
  );
};

export { Screen };
