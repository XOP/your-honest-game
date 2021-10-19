import React from "react";
import { useSelector } from "react-redux";

import Card from "choom/lib/components/card/Card";
import Contain from "choom/lib/components/layout/Contain";
import Divider from "choom/lib/components/divider/Divider";
import Heading from "choom/lib/components/heading/Heading";

import { Actions } from "../../compositions/actions/Actions";

import { CLUE_PHASE } from "../../../redux/utils";

const Clue = ({ clue, cluePhase }) => {  
  if (!clue) return null;

  let content = null;

  if (cluePhase === CLUE_PHASE.active) {
    content = (
      <div>
        <Contain space="1" dir="xy">
          {clue.question}
        </Contain>
        <Actions
          primary="I know"
          secondary="I pass"
          onPrimary={() => null}
          onSecondary={() => null}
        />
      </div>
    );
  }

  if (cluePhase === CLUE_PHASE.answer) {
    content = (
      <div>
        <Contain space="1" dir="xy">
          <Heading as='div' level='5' colorInherit>Correct Answer:</Heading>
          <Divider />
          {clue.answer}
        </Contain>
        <Actions
          primary="Correct!"
          secondary="Hmm..."
          onPrimary={() => null}
          onSecondary={() => null}
        />
      </div>
    );
  }

  return (
    <Card align="center" padding="1">
      {content}
    </Card>
  );
};

export { Clue };
