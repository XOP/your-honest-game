import React from "react";

import Flow from "choom/lib/components/layout/Flow";
import Button from "choom/lib/components/button/Button";

const Actions = ({
  size = "small",
  primary,
  secondary,
  onPrimary,
  onSecondary,
}) => {
  return (
    <Flow space="2" align="center">
      <Button size={size} onClick={onPrimary}>
        {primary}
      </Button>
      <Button size={size} onClick={onSecondary}>
        {secondary}
      </Button>
    </Flow>
  );
};

export { Actions };
