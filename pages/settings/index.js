import React, { useContext } from "react";
import dynamic from "next/dynamic";

import Heading from "choom/lib/components/heading/Heading";
import Flex from "choom/lib/components/layout/Flex";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Stack from "choom/lib/components/layout/Stack";

import { Volume, VolumeX, Sun, Moon, ZapOff, Zap } from "react-feather";

import ThemeContext from "../../src/assets/theme/theme";
import SettingsContext from "../../src/context/settings";

import vibro from "../../src/utils/vibration";

const Setting = dynamic(
  () =>
    import("../../src/components/compositions/setting/Setting").then(
      (mod) => mod.Setting
    ),
  { ssr: false }
);

export default function Settings() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  const { sound, vibration } = useContext(SettingsContext);
  const [soundOn, toggleSound] = sound;
  const [vibrationOn, toggleVibration] = vibration;

  return (
    <Flex space="2" dir="column">
      <Heading level="2" as="h1">
        Settings
      </Heading>

      <FlexUnit>
        <Stack dir="y">
          <Setting
            iconStart={<VolumeX />}
            iconEnd={<Volume />}
            onChange={toggleSound}
            on={soundOn}
          >
            Sound
          </Setting>

          {vibro.supported && (
            <Setting
              iconStart={<ZapOff />}
              iconEnd={<Zap />}
              onChange={toggleVibration}
              on={vibrationOn}
            >
              Vibration
            </Setting>
          )}

          <Setting
            iconStart={<Sun />}
            iconEnd={<Moon />}
            onChange={toggleTheme}
            on={theme === "dark"}
          >
            Light
          </Setting>
        </Stack>
      </FlexUnit>
    </Flex>
  );
}
