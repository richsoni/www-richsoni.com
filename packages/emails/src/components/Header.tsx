/**
 * @class Header
 */

import * as React from 'react'
/// @ts-ignore

type Theme = "light" | "dark"

export type Props = {
  backgroundColor?: string,
  imgSRC: string
}

export default class Header extends React.Component<Props> {
  render() {
    const {backgroundColor, imgSRC} = this.props;
    return (
      // @ts-ignore
      <table bgcolor={backgroundColor} style={{backgroundColor: backgroundColor, height: '200px', width: '100%'}}>
          <tr>
           <td style={{verticalAlign: 'middle', textAlign: 'center'}}>
             <a href='https://www.richsoni.com'><img src={imgSRC} width="300" style={{border: 0, height: 'auto !important', outline: 'none', textDecoration: 'none'}} /></a>
           </td>
          </tr>
      </table>
    )
  }
}
