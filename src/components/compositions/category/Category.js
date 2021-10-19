import React from "react";

import Card from "choom/lib/components/card/Card";
import Flow from "choom/lib/components/layout/Flow";
import FlexUnit from "choom/lib/components/layout/FlexUnit";

const Category = ({ id, title = "", clues = {}, onItemClick = () => null }) => {
  let _clues = Object.entries(clues);

  _clues.sort(([val_a], [val_b]) => {
    if (+val_a > +val_b) {
      return 1;
    } else return -1;
  });

  const _title = title.toUpperCase();

  return (
    <div>
      <Flow space="0.5">
        <FlexUnit>{_title}</FlexUnit>
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
            <Card key={value} padding="0.5" onClick={onClick}>
              {_value}
            </Card>
          );
        })}
      </Flow>
    </div>
  );
};

export { Category };
