import StyleTile from "@richsoni/style-tile";
import { array, color, text, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("StyleTiles", module);

stories.addDecorator(withKnobs);

stories.add("default", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <StyleTile
      tileVersion={1}
      adjectives={array("Adjectives", [
        "Example",
        "Adjective",
        "Another Example",
      ])}
    />
  </div>
));

const stv6Props = () => ({
  adjectives: array("Adjectives", [
    "Prolific Songwriter",
    "Frontend Developer",
    "Storyteller",
    "Thinker",
    "Writer",
    "Creator",
  ]),
  logoSRC: text("Logo SRC", "https://richsoni.com/static/logo-300-ccaf244cfbddb3bd8bc2478b293c0b3a.png"),
  projectName: "RichSoni.com",
  textures: array("Texture Images", [
    "https://richsoni.com/images/releases/safety-tapes-vol-6.png",
    "https://www.richsoni.com/images/releases/safety-tapes-vol-5.png",
    "https://www.richsoni.com/images/releases/safety-tapes-vol-3.png",
    "https://www.richsoni.com/images/releases/live-2017-07-16-pine-island.png",
  ]),
  tileVersion: 1,
});

stories.add("Safety Tapes 1", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <StyleTile
      {...stv6Props()}
      colors={{
        background: color("Color: background", "#ffffff"),
        foreground: color("Color: foreground", "#000000"),
        primaryColor: color("Color: primaryColor", "#1565c0"),
        primaryColorSoft: color("Color: primaryColorSoft", "#4DAAF6"),
        secondaryColor: color("Color: secondaryColor", "#FF5F00"),
        secondaryColorSoft: color("Color: secondaryColorSoft", "#F7A65B"),
      }}
    />
  </div>
));

stories.add("Safety Tapes 2", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <StyleTile
      {...stv6Props()}
      colors={{
        background: color("Color: background", "#fffffa"),
        foreground: color("Color: foreground", "#000000"),
        primaryColor: color("Color: primaryColor", "#004b5d"),
        primaryColorSoft: color("Color: primaryColorSoft", "#90c5f9"),
        secondaryColor: color("Color: secondaryColor", "#a82218"),
        secondaryColorSoft: color("Color: secondaryColorSoft", "#f16554"),
      }}
    />
  </div>
));
