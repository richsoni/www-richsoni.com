/**
 * @class ThemeBox
 */

import * as React from 'react'
/// @ts-ignore

type Theme = "light" | "dark"

export type Props = {
  theme: Theme
  children: JSX.Element[]
}

const baseTheme = {
  fontFamily: 'merriweather sans,helvetica neue,helvetica,arial,sans-serif',
  padding: '9px',
  fontSize: '16px',
  lineHeight: '150%',
}

const cell = {
  width: '50%',
  padding: '10px'
}

const Cell = (props: any) => {
  return (
    <td style={cell}>
      {props.children}
    </td>
  )
}

type TitledCellProps = {
  title: string,
  children: string | JSX.Element
}

export const TitledCell = (props: TitledCellProps) => {
  return (
    <Cell>
      <h2 style={{fontSize: '22px', fontStyle: 'normal', fontWeight: 'bold', lineHeight: '150%', letterSpacing: 'normal', textAlign: 'left', display: 'block', margin: 0, padding: 0, color: '#222222', fontFamily: 'Helvetica'}}>
        {props.title}
      </h2>
      <p style={{margin: '10px 0', padding: 0, color: '#757575', fontFamily: 'Helvetica', fontSize: '16px', lineHeight: '150%', textAlign: 'left'}}>
        {props.children}
      </p>
    </Cell>
  );
}

type ImgCellProps = {
  src: string,
}

export const ImgCell = (props: ImgCellProps) => {
  return (
    <Cell>
      <img src={props.src} width="100%" style={{border: 0, height: 'auto !important', outline: 'none', textDecoration: 'none'}} />
    </Cell>
  );
}

const themes = {
  dark: {
    background: '#f7f7f7',
    color: '#757575',
  },

  light: {
    background: '#ffffff',
    color: '#757575',
  }
}

export default class ThemeBox extends React.Component<Props> {
  render() {
    const {children, theme} = this.props;
    return (
      <table style={{...baseTheme, ...themes[theme]}}>
        <tbody>
          <tr>
           {children}
          </tr>
         </tbody>
      </table>
    )
  }
}
