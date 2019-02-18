import {ImgCell, TellAStory1, ThemeBox, TitledCell} from "@richsoni/emails";
import { storiesOf } from "@storybook/react";
import * as React from "react";

storiesOf("Emails/Components", module).add("ThemeBox", () => (
  <div style={{width: 900, margin: "auto auto"}}>
    <ThemeBox theme="light">
      <TitledCell title='<ThemeBox theme="light">'>
        I have a lefthand TitledCell, and a righthand ImgCell
      </TitledCell>
      <ImgCell
        src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/4a7b6fcd-aa07-44c1-8401-55e04e8a91b7.jpg"
      />
    </ThemeBox>

    <ThemeBox theme="dark">
      <ImgCell
        src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/4a7b6fcd-aa07-44c1-8401-55e04e8a91b7.jpg"
      />
      <TitledCell title='<ThemeBox theme="dark">'>
        I have a righthand TitledCell, and a lefthand ImgCell
      </TitledCell>
    </ThemeBox>
  </div>
));

storiesOf("Emails/TellAStory1", module).add("default", () => (
  <TellAStory1>
  </TellAStory1>
));
