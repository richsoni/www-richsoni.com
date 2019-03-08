/**
 * @class OpenMic
 */

import * as React from 'react'
/// @ts-ignore

export type Props = {
  dateStr: string,
  venueName: string,
  timeStr: string
}

export default class OpenMic extends React.Component<Props> {
  render() {
    const {dateStr, venueName, timeStr} = this.props;
    return (
      <table style={{
         width: "100%",
         verticalAlign: "middle",
         textAlign: "center",
         fontSize:18,
         paddingTop: 30,
         paddingBottom: 20,
         fontFamily: 'merriweather sans,helvetica neue,helvetica,arial,sans-serif',
         color: '#757575',
         lineHeight: '150%',
      }}>
        <tbody>
          <tr>
           <td style={{
             fontSize: 26
           }}>
             <strong>🎤 Open Mic: </strong> {dateStr}
           </td>
          </tr>
          <tr>
           <td style={{verticalAlign: "middle", textAlign: "center"}}>
             <strong>{venueName}</strong> {timeStr}
           </td>
          </tr>
         </tbody>
      </table>
    )
  }
}
