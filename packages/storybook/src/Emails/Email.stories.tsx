import { Header, ImgCell, OpenMic, ThemeBox, TitledCell} from "@richsoni/email-components";
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

const logoURL = "https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/e4430f47-a675-4dcd-9d08-90b0cba22a11.png";

storiesOf("Emails/Components", module).add("Header", () => (
  <div>
    <Header
      backgroundColor="gainsboro"
      imgSRC={logoURL}
    />
    <Header
      backgroundColor="whitesmoke"
      imgSRC={logoURL}
    />
    <Header
      backgroundColor="cornsilk"
      imgSRC={logoURL}
    />
    <Header
      backgroundColor="mintcream"
      imgSRC={logoURL}
    />
    <Header
      backgroundColor="ghostwhite"
      imgSRC={logoURL}
    />
  </div>
));

storiesOf("Emails/Components", module).add("OpenMic", () => (
  <div>
    <OpenMic
       dateStr="Sunday, 2019-02-22"
       timeStr="7:00pm-9:00pm"
       venueName="🍵 Fine Grind (Little Falls)"
    />

    <OpenMic
       dateStr="Monday, 2019-02-22"
       timeStr="1:00pm-2:00pm"
       venueName="😈 Lorem Ipsum (Little Falls)"
    />
  </div>
));
