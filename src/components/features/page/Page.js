import React from "react";
import { useRouter } from "next/router";

import Support from "choom/lib/components/layout/Support";
import FlexUnit from "choom/lib/components/layout/FlexUnit";

import { Toolbar } from "../toolbar/Toolbar";

import { routes } from "../../../routes";

const Page = ({ children }) => {
  const router = useRouter();
  const isStart = router.route === routes.START;

  return (
    <Support as="main">
      <Support>{children}</Support>

      {!isStart && (
        <FlexUnit basis="20vh" grow="0">
          <Toolbar />
        </FlexUnit>
      )}
    </Support>
  );
};

export { Page };
