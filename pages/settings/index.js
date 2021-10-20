import React from "react";

import Heading from "choom/lib/components/heading/Heading";
import Flex from "choom/lib/components/layout/Flex";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Stack from "choom/lib/components/layout/Stack";

import { Volume, VolumeX, Sun, Moon } from "react-feather";

import { Setting } from "../../src/components/compositions/setting/setting";

export default function Settings() {
  return (
    <Flex space="2" dir="column">
      <Heading level="2" as="h1">
        Settings
      </Heading>

      <FlexUnit>
        <Stack dir="y">

          <Setting iconStart={<VolumeX />} iconEnd={<Volume />} onChange={() => null}>
            Sound
          </Setting>
    
          <Setting iconStart={<Sun />} iconEnd={<Moon />} onChange={() => null}>
            Light
          </Setting>
        </Stack>
      </FlexUnit>
    </Flex>
  );
}
