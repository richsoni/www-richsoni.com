import { storiesOf } from "@storybook/react";
import * as React from "react";
import Component from "./Component";
storiesOf("Component", module).add("default", function () { return (<Component style={{ width: "50%", marginLeft: 10 }}>
  hery
  </Component>); });
