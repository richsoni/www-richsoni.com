import STV6Tile from "@richsoni/tile-stv6";
import { array, color, text, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("StyleTiles", module);

stories.addDecorator(withKnobs);

stories.add("STV6", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <STV6Tile
      projectName="RichSoni.com"
      tileVersion={1}
      logoSRC={text("Logo SRC", "https://richsoni.com/static/logo-300-ccaf244cfbddb3bd8bc2478b293c0b3a.png")}
      colors={{
        background: color("Color: background", "#ffffff"),
        foreground: color("Color: foreground", "#000000"),
        primaryColor: color("Color: primaryColor", "#1565c0"),
        primaryColorSoft: color("Color: primaryColorSoft", "#4DAAF6"),
        secondaryColor: color("Color: secondaryColor", "#FF5F00"),
        secondaryColorSoft: color("Color: secondaryColorSoft", "#F7A65B"),
      }}
      textures={array("Texture Images", [
        "https://richsoni.com/images/releases/safety-tapes-vol-6.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-5.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-3.png",
        "https://www.richsoni.com/images/releases/live-2017-07-16-pine-island.png",
      ])}
      adjectives={array("Adjectives", [
        "Prolific Songwriter",
        "Frontend Developer",
        "Storyteller",
        "Thinker",
        "Writer",
        "Creator",
      ])}
    />
  </div>
));
