import AlbumArt from "@richsoni/components-album-art";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import Logo from '../static/logo-300.png';

const stories = storiesOf("AlbumArt", module);

stories.add("No Artwork", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <div style={{width: 100, height: 100}}>
      <AlbumArt />
    </div>
  </div>
))
.add("With Artwork", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <div style={{width: 100, height: 100}}>
      <AlbumArt>
        <img src={Logo} />
      </AlbumArt>
    </div>
  </div>
));
