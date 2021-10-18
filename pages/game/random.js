/**
 * This route is for testing purposes
 * NOT recommended to use in production
 */

import React from "react";

import Card from "choom/lib/components/card/Card";
import Heading from "choom/lib/components/heading/Heading";

import { getRandomClue } from '../api/random';

export default function Game({ clue }) {
  return (
    <div>
      <Heading level="2" as="h1" colorInherit>
        Random question
      </Heading>

      <Card padding="2">
        <div>
          <strong>value: {clue.value}</strong>
        </div>
        <Heading level="4" as="h2" colorInherit align="left">
          Category: {clue.category.title}
        </Heading>
        <div title={clue.answer}>
          {clue.question}
        </div>
      </Card>
    </div>
  );
}

export async function getServerSideProps() {
  const clue = await getRandomClue();

  if (!clue) {
    return {
      redirect: {
        destination: '/game',
        permanent: false,
      },
    }
  }

  return {
    props: {
      clue
    },
  };
}
