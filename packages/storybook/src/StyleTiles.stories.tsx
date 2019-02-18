import STV6Tile from "@richsoni/tile-stv6";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("StyleTiles", module).add("STV6", () => (
  <div style={{width: 1200, margin: "auto auto"}}>
    <STV6Tile
      projectName="RichSoni.com"
      logoSRC="https://richsoni.com/static/logo-300-ccaf244cfbddb3bd8bc2478b293c0b3a.png"
      tileVersion={1}
      textures={[
        "https://richsoni.com/images/releases/safety-tapes-vol-6.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-5.png",
        "https://www.richsoni.com/images/releases/safety-tapes-vol-3.png",
        "https://www.richsoni.com/images/releases/live-2017-07-16-pine-island.png",
      ]}
      colors={{
        background: "#000",
        backgroundAccent: "#5dc3ff",
        backgroundSoft: "#333333",
        foreground: "#fff",
        foregroundAccent: "#ff6b5a",
        foregroundEmph: "#f7feb3",
        foregroundSoft: "#c2e3ff",
      }}
      adjectives={[
        "Prolific Songwriter",
        "Frontend Developer",
        "Storyteller",
        "Thinker",
        "Writer",
        "Creator",
      ]}
    />
  </div>
));
