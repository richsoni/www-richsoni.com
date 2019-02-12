/**
 * @class TellAStory1
 */

import * as React from 'react'
/// @ts-ignore
import { Email, Span, A} from 'react-html-email'

export type Props = {}

export default class TellAStory1 extends React.Component<Props> {
  render() {
    return (
      <Email title='test'>
        <table style={{fontFamily: 'merriweather sans,helvetica neue,helvetica,arial,sans-serif', padding: '9px', background: '#f7f7f7', color: '#757575', fontSize: '16px', lineHeight: '150%', textAlign: 'left', tableLayout: 'fixed'}}>
          <tbody>
            <tr>
              <td style={{width: '50%', padding: '10px'}}>
                <h2 style={{fontSize: '22px', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '150%', letterSpacing: 'normal', textAlign: 'left', display: 'block', margin: 0, padding: 0, color: '#222222', fontFamily: 'Helvetica'}}>Looking For New Venues?</h2>
                <p style={{margin: '10px 0', padding: 0, color: '#757575', fontFamily: 'Helvetica', fontSize: '16px', lineHeight: '150%', textAlign: 'left'}}>I have a few in mind, but if you have a place in mind let me know</p>
              </td>
              <td style={{width: '50%'}}>
                <img src="https://gallery.mailchimp.com/bc85e50b336a97670d097c9d0/images/4a7b6fcd-aa07-44c1-8401-55e04e8a91b7.jpg" width="100%" style={{border: 0, height: 'auto !important', outline: 'none', textDecoration: 'none'}} />
              </td>
            </tr>
           </tbody>
        </table>
      </Email>
    )
  }
}
