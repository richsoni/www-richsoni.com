import {
  Apple, Bars, CompactDisc, Envelope, Facebook, Github, Headphones, SortDown, SortUp,
  Soundcloud, Spotify, Th, ThList, TimesCircle, Twitter
} from "@richsoni/components-icon";
import { storiesOf } from "@storybook/react";
import * as React from "react";

const stories = storiesOf("Icon", module);

const Wrapper = (props: any) => {
  const {children, name} = props;
  return (
      <div style={{
        padding: '1em',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #333',
        width: '7em',
      }}>
        <div style={{fontSize: '2em'}}>{children}</div>
        <div style={{fontSize: '.75em'}}>{name}</div>
      </div>
    )
}
stories.add("default", () => (
  <div style={{
    margin: "auto auto",
    display: 'flex',
    flexFlow: 'row wrap'
  }}>
    <Wrapper name='Apple'> <Apple /> </Wrapper>
    <Wrapper name='Bars'> <Bars /> </Wrapper>
    <Wrapper name='CompactDisc'> <CompactDisc /> </Wrapper>
    <Wrapper name='Envelope'> <Envelope /> </Wrapper>
    <Wrapper name='Facebook'> <Facebook /> </Wrapper>
    <Wrapper name='Github'> <Github /> </Wrapper>
    <Wrapper name='Headphones'> <Headphones /> </Wrapper>
    <Wrapper name='SortDown'> <SortDown /> </Wrapper>
    <Wrapper name='SortUp'> <SortUp /> </Wrapper>
    <Wrapper name='Soundcloud'> <Soundcloud /> </Wrapper>
    <Wrapper name='Spotify'> <Spotify /> </Wrapper>
    <Wrapper name='Th'> <Th /> </Wrapper>
    <Wrapper name='ThList'> <ThList /> </Wrapper>
    <Wrapper name='TimesCircle'> <TimesCircle /> </Wrapper>
    <Wrapper name='Twitter'> <Twitter /> </Wrapper>
  </div>
));
