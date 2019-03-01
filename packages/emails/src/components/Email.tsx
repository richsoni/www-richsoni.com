/**
 * @class Email
 */

import * as React from "react";
/// @ts-ignore
import { A, Email as REmail, renderEmail, Span} from "react-html-email";

export interface Props {
  children: JSX.Element[];
  showEmailSRC: boolean;
}

export default class Email extends React.Component<Props> {
  public render() {
    const emailCode = renderEmail(this.props.children);
    if (!this.props.showEmailSRC) {
      return <REmail>{this.props.children}</REmail>;
    } else {
      return <div>{emailCode}</div>;
    }
  }
}
