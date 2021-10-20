import React from "react";

import Card from "choom/lib/components/card/Card";
import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";

import styles from "./category.module.css";

const Category = ({ id, title = "", clues = {}, onItemClick = () => null }) => {
  let _clues = Object.entries(clues);

  _clues.sort(([val_a], [val_b]) => {
    if (+val_a > +val_b) {
      return 1;
    } else return -1;
  });

  const _title = title.toUpperCase();

  return (
    <Flow space="0.5" className={styles.root}>
      <FlexUnit className={styles.titlewrap}>
        <div className={styles.title} title={_title}>
           {_title}
        </div>
      </FlexUnit>
      {_clues.map(([value, { activated }]) => {
        const onClick = activated
          ? undefined
          : () => onItemClick({ id, value });

        const _value = activated ? (
          <span style={{ userSelect: "none", opacity: "0" }}>000</span>
        ) : (
          value
        );

        return (
          <Card
            align="center"
            key={value}
            padding="0.5"
            onClick={onClick}
            className={styles.item}
            title={`${_title}: ${value}`}
          >
            {_value}
          </Card>
        );
      })}
    </Flow>
  );
};

export { Category };
