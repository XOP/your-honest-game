import React from "react";

import Icon from "choom/lib/components/icon/Icon";
import FlexUnit from "choom/lib/components/layout/FlexUnit";
import Flow from "choom/lib/components/layout/Flow";
import Panel from "choom/lib/components/panel/Panel";

import { GitHub, Database } from "react-feather";

import styles from './about.module.css';

const About = () => {
  return (
    <Panel as='header' placement='top' padding='0.5' className={styles.root}>
      <Flow fluid justify='end' space='1'>
        <FlexUnit grow='1'>
          <small className={styles.text}>
            Prototype application inspired by <a className={styles.link} href="https://en.wikipedia.org/wiki/Jeopardy!">Jeopardy!</a>
          </small>
        </FlexUnit>
        <a href='https://jservice.io/' className={styles.link}>
          <Icon size='small'><Database /></Icon>
        </a>
        <a href='https://github.com/XOP/your-honest-game' className={styles.link}>
          <Icon size='small'><GitHub /></Icon>
        </a>
      </Flow>
    </Panel>
  );
};

export { About };
