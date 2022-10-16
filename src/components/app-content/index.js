import React, { memo } from "react";
import { Card } from "antd";

import { ConentWrapper, TopCard } from "./style";

export default memo((props) => {
  return (
    <ConentWrapper>
      {props.topContent && <Card style={TopCard}>{props.topContent}</Card>}
      <Card>{props.mainContent}</Card>
    </ConentWrapper>
  );
});
