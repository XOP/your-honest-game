import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

import Button from "choom/lib/components/button/Button";
import Card from "choom/lib/components/card/Card";
import Contain from "choom/lib/components/layout/Contain";
import Flex from "choom/lib/components/layout/Flex";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Flow from "choom/lib/components/layout/Flow";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Panel from "choom/lib/components/panel/Panel";

import { RefreshCcw, Settings } from "react-feather";

import { scoreSelector } from "../../../redux/slices/gameSlice";
import { routes } from "../../../routes";

const Toolbar = () => {
  const score = useSelector(scoreSelector);

  return (
    <Panel placement="bottom" position="fixed" padding="1">
      <Flex dir="row" fluid align="center" justify="center">
        <FlexUnit basis="30%">
          <Flow as="nav" space="1">
            <Link href={routes.MAIN}>
              <a>
                <Button size="small" isIcon>
                  <Icon size="inherit">
                    <RefreshCcw />
                  </Icon>
                </Button>
              </a>
            </Link>
          </Flow>
        </FlexUnit>
        <FlexUnit basis="40%">
          <Card padding="1">
            <Contain dir="x" space="1">
              <Heading level="2" as="div" colorInherit>
                {score}
              </Heading>
            </Contain>
          </Card>
        </FlexUnit>
        <FlexUnit basis="30%">
          <Flow as="nav" space="1">
            <Link href={routes.SETTINGS}>
              <a>
                <Button size="small" isIcon>
                  <Icon size="inherit">
                    <Settings />
                  </Icon>
                </Button>
              </a>
            </Link>
          </Flow>
        </FlexUnit>
      </Flex>
    </Panel>
  );
};

export { Toolbar };
