/**
 * @class TellAStory1
 */

import * as React from 'react'
/// @ts-ignore
import { Email, Item, Span, A} from 'react-html-email'

export type Props = { text: string }

export default class TellAStory1 extends React.Component<Props> {
  render() {
    return (
      <Email title="Hello World!">
        <Item align="center">
          <Span fontSize={20}>
            This is an example email made with:
            <A href="https://github.com/chromakode/react-html-email">react-html-email</A>.
          </Span>
        </Item>
      </Email>
    )
  }
}
