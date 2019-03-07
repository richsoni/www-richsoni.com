import {CoffeeIcon} from "@richsoni/components-icon";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("Icon", module);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <CoffeeIcon />
  </div>
));
