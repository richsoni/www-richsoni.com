import {A, Email, Header, ImgCell, OpenMic, ThemeBox, TitledCell} from "@richsoni/components-email";
import { boolean, withKnobs} from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("Emails/Mail", module);
stories.addDecorator(withKnobs);

const urls = {
  fg: "https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/4a7b6fcd-aa07-44c1-8401-55e04e8a91b7.jpg",
  logo: "https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/e4430f47-a675-4dcd-9d08-90b0cba22a11.png",
  stv6: "https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/c0bd17cc-5ede-48ca-845d-f9eaed96e760.jpg",
};
stories.add("2019-02-26", () => (
  <Email showEmailSRC={boolean("Show Email Source", false)}>
    <Header
      backgroundColor="#dcdcdc"
      imgSRC={urls.logo}
    />
    <OpenMic
       dateStr="Sunday, 2019-03-03"
       timeStr="7:00pm-9:00pm"
       venueName="🍵 The Fine Grind (Little Falls)"
    />
    <ThemeBox theme="dark">
      <TitledCell title="Open Mic at The Fine Grind">
         <span>I host the Open Mic Night at </span>
          <A href="https://www.thefinegrindcoffeebar.com/">
            The Fine Grind in Little Falls
           </A> on the
        <strong> first Sunday of every month. </strong>
       Stop by if you enjoy listening to blossoming talent,
       or you yourself would like to share something.
      </TitledCell>
      <ImgCell src={urls.fg}/>
    </ThemeBox>

    <ThemeBox theme="light">
      <TitledCell title="From The Blog">
        In my last email, I recruited Nilsen Strandskov's expertise.
        We improved the open rate by 50%!
        <A href="https://www.richsoni.com/posts/2019-02-22-experiment-email-subject-line-with-nilsen-strandskov/"> Read More </A>
      </TitledCell>
      <ImgCell src="https://www.richsoni.com/images/posts/2019-02-22-hero.jpg" />
    </ThemeBox>

    <ThemeBox theme="dark" >
      <TitledCell title="Safety Tapes Vol. 6">
        My latest recording effort, has been making waves online.  Check it out if you have not done so already!
      </TitledCell>
      <ImgCell src={urls.stv6}/>
    </ThemeBox>
  </Email>
));
