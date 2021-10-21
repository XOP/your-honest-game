import React, { useContext } from "react";
import dynamic from "next/dynamic";

import Heading from "choom/lib/components/heading/Heading";
import Flex from "choom/lib/components/layout/Flex";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Stack from "choom/lib/components/layout/Stack";

import { Volume, VolumeX, Sun, Moon, ZapOff, Zap } from "react-feather";

import ThemeContext, { themeAlternative } from "../../src/assets/theme/theme";

const Setting = dynamic(
  () =>
    import("../../src/components/compositions/setting/setting").then(
      (mod) => mod.Setting
    ),
  { ssr: false }
);

export default function Settings() {
  const [theme, toggleTheme] = useContext(ThemeContext);

  const handleSoundToggle = () => {};

  const handleVibrationToggle = () => {};

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
            onChange={handleSoundToggle}
            on={false}
          >
            Sound
          </Setting>

          <Setting
            iconStart={<ZapOff />}
            iconEnd={<Zap />}
            onChange={handleVibrationToggle}
            on={false}
          >
            Vibration
          </Setting>

          <Setting
            iconStart={<Sun />}
            iconEnd={<Moon />}
            onChange={toggleTheme}
            on={theme === themeAlternative}
          >
            Light
          </Setting>
        </Stack>
      </FlexUnit>
    </Flex>
  );
}
