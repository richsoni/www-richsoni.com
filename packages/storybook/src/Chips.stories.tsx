import Chip from "@richsoni/components-chip";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("Chip", module);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <Chip />
  </div>
));
