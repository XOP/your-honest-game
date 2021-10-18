import React from "react";

import Support from "choom/lib/components/layout/Support";
import Panel from "choom/lib/components/panel/Panel";

import { Navigation } from "../navigation/Navigation";

const Page = ({ children }) => {
  return (
    <Support as="main">
      {children}

      <Panel placement="bottom" padding='1'>
        <Navigation />
      </Panel>
    </Support>
  );
};

export { Page };
