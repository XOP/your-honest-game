import React from "react";

import Media from "choom/lib/components/layout/Media";
import Heading from "choom/lib/components/heading/Heading";
import Icon from "choom/lib/components/icon/Icon";

const Result = ({ children: title, value, iconSvg }) => {
  const icon = (
    <Icon size="inherit">
      {iconSvg}
    </Icon>
  );

  return (
    <div>
      <Media start={icon} end={value}>
        <Heading level="5" as="div" colorInherit align="left">
          {title}
        </Heading>
      </Media>
    </div>
  );
};

export { Result };
