import React from "react";

import Media from "choom/lib/components/layout/Media";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";

const Result = ({ children: title, value, iconSvg }) => {
  const icon = <Icon size="inherit">{iconSvg}</Icon>;

  const _value = <strong>{value}</strong>;

  return (
    <Media start={icon} end={_value}>
      <Heading level="5" as="div" colorInherit align="left">
        {title}
      </Heading>
    </Media>
  );
};

export { Result };
