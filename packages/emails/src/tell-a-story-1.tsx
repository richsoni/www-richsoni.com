/**
 * @class TellAStory1
 */

import * as React from 'react'
/// @ts-ignore
import { Email, Span, A} from 'react-html-email'
import ThemeBox, {TitledCell, ImgCell} from './components/ThemeBox';

export type Props = {}

export default class TellAStory1 extends React.Component<Props> {
  render() {
    return (
      <Email title='test'>
        <ThemeBox theme='dark'>
          <TitledCell title='Looking For New Venues?'>
            I have a few in mind, but if you have a place in mind let me know
          </TitledCell>
          <ImgCell src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/4a7b6fcd-aa07-44c1-8401-55e04e8a91b7.jpg" />
        </ThemeBox>

        <ThemeBox theme='light' >
          <ImgCell src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/5db44f69-384e-4146-b07c-b52920112ecd.jpg" />
          <TitledCell title='Organic Music Now!'>
            I have a few in mind, but if you have a place in mind let me know
          </TitledCell>
        </ThemeBox>

        <ThemeBox theme='dark' >
          <TitledCell title='Safety Tapes Vol. 6'>
            My latest recording effort, has been making waves online.  Check it out if you have not done so already!
          </TitledCell>
          <ImgCell src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/c0bd17cc-5ede-48ca-845d-f9eaed96e760.jpg" />
        </ThemeBox>
      </Email>
    )
  }
}
