import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Button from "choom/lib/components/button/Button";
import Heading from "choom/lib/components/heading/Heading";
import Hold from "choom/lib/components/layout/Hold";
import Loader from "choom/lib/components/loader/Loader";

import {
  statusSelector,
  fetchClues
} from "../src/redux/slices/cluesSlice";

import { STATUS } from "../src/redux/utils";

export default function Intro() {
  const dispatch = useDispatch();
  const status = useSelector(statusSelector);

  const handleGameStart = () => {
    dispatch(fetchClues());
  }

  const isLoading = status === STATUS.loading;

  return (
    <div>
      <Heading level="2" as="h1" colorInherit>
        Your honest game
      </Heading>

      <br />

      <Hold>
        <Button onClick={handleGameStart} size='big'>
          {
            isLoading ? 
            <Loader size='small' /> :
            'Start'
          }
        </Button>
      </Hold>
    </div>
  );
}
