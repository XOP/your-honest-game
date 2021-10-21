import React from "react";

import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";
import Media from "choom/lib/components/layout/Media";
import Switch from "choom/lib/components/switch/Switch";

import styles from "./setting.module.css";

const Setting = ({ children: title, iconStart, iconEnd, on, onChange }) => {
  return (
    <Media
      align="center"
      end={
        <Media
          align="center"
          space="0.5"
          start={<Icon size="regular">{iconStart}</Icon>}
          end={<Icon size="regular">{iconEnd}</Icon>}
        >
          <div className={styles.toggle}>
            <Switch onChange={onChange} checked={on} />
          </div>
        </Media>
      }
      className={styles.root}
    >
      <Heading level="4" as="div" align="left">
        {title}
      </Heading>
    </Media>
  );
};

export { Setting };
