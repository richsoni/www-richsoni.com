import AlbumArt from "@richsoni/components-album-art";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("AlbumArt", module);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <AlbumArt
    />
  </div>
));
