import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Settings, Star } from "react-feather";

import Button from "choom/lib/components/button/Button";
import Heading from "choom/lib/components/heading/Heading";
import Hold from "choom/lib/components/layout/Hold";
import Flow from "choom/lib/components/layout/Flow";
import Icon from "choom/lib/components/icon/Icon";
import Loader from "choom/lib/components/loader/Loader";

import { statusSelector, fetchClues } from "../src/redux/slices/cluesSlice";

import { STATUS } from "../src/redux/utils";

export default function Intro() {
  const dispatch = useDispatch();
  const status = useSelector(statusSelector);

  const handleGameStart = () => {
    dispatch(fetchClues());
  };

  const isLoading = status === STATUS.loading;

  return (
    <div>
      <Heading level="2" as="h1" colorInherit>
        Your honest game
      </Heading>

      <br />

      <Hold>
        <Flow>
          <Button onClick={handleGameStart} size="big" isIcon>
            {isLoading ? (
              <Loader size="small" />
            ) : (
              <Icon size="inherit">
                <Star />
              </Icon>
            )}
          </Button>

          <Button size="big" isIcon>
            <Icon size="inherit">
              <Settings />
            </Icon>
          </Button>
        </Flow>
      </Hold>
    </div>
  );
}
