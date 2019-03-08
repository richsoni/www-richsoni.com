/**
 * @class StyleTile
 */

import * as React from 'react'
import styles from './styles.css'

export type TileColors = {
  background: string,
  foreground: string,
  secondaryColor: string,
  primaryColor: string,
  primaryColorSoft: string,
  secondaryColorSoft: string,
}

const defaultColors = {
  background: 'white',
  foreground: 'black',
  primaryColor: 'slategray',
  secondaryColor: 'dimgray',
  primaryColorSoft: 'darkgray',
  secondaryColorSoft: 'silver',
}

const Texture = (
  { texture, colors, }:
  { texture: string, colors: TileColors }) => {
  return (
    <div
       key={texture}
       className={styles.textureBox}
       style={{
         backgroundImage: `url(${texture})`,
         backgroundColor: colors.background,
       }}
    />
  )
}

const ColorBox = ({
  colors,
  colorAttr,
  backgroundAttr,
}: {
  colors: TileColors
  colorAttr: string,
  backgroundAttr: string
}) => {
  return (
    <div
      className={styles.colorBox}
      style={{
        background: colors[backgroundAttr],
        color: colors[colorAttr],
        border: `1px solid black`
      }}
    >{backgroundAttr}</div>
  )
}

export type TileProps = {
  projectName?: string,
  logoSRC?: string,
  tileVersion?: number,
  colors?: TileColors,
  fontFamily?: string,
  textures?: string[],
  adjectives?: string[],
}

const text = `
Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
Duis autem vel feugait nulla facilisi.
`

const Adjective = ({
  colors,
  adjective
}: {
  colors: TileColors,
  adjective: string,
}) => {
  const adjColors = [
    colors.primaryColor,
    colors.secondaryColorSoft,
    colors.foreground,
    colors.secondaryColor,
    colors.primaryColorSoft
  ]
  const randomIndex = Math.floor(Math.random()*adjColors.length)
  return (
    <div style={{
      color: adjColors[randomIndex],
      fontSize: `${Math.random()+1}em`,
    }}
    className={styles.adjective}
    >
      {adjective}
    </div>
  )
}

export default ({
  colors = defaultColors,
  fontFamily = '"Lucida Grande","Arial",sans-serif',
  textures = [],
  adjectives = [],
  projectName = "Project Name",
  tileVersion = 1,
  logoSRC = ""
}: TileProps) => {
  return (
    <div className={styles.tile} style={{
      fontFamily,
      color: colors.foreground,
      background: colors.background,
    }}>
        <div className={styles.header}>
          <div
            className={styles.topBar}
            style={{
              color: colors.background,
              background: colors.primaryColor,
            }}
          >
            <div
               className={styles.logo}
               style={{
                 backgroundImage: `url(${logoSRC})`,
                 backgroundColor: colors.primaryColorSoft,
               }}
            />
            <div className={styles.headerRight}> {projectName} </div>
          </div>
          <div style={{
            backgroundColor: styles.background,
            color: styles.foreground
          }}
          >
            <h3 style={{color: colors.secondaryColorSoft}} className={styles.headerRight}>Style Tile</h3>
            <h4 style={{color: colors.primaryColorSoft}} className={styles.headerRight}>Version {tileVersion}</h4>
          </div>
      </div>
      <div className={styles.halves}>
        <div>
          <h1 style={{color: colors.secondaryColor}}>This is an example of a header</h1>
          <h5 style={{color: colors.primaryColorSoft}}>Font Family: {fontFamily}</h5>
          <h2 style={{color: colors.secondaryColorSoft}}>This is a Subhead</h2>
          <p>
            {text}
          </p>
          <p>
            <a style={{color: colors.primaryColor}} href="#">This is an example link</a>
          </p>
          <div className={styles.buttonGrid}>
            <div
               className={styles.button}
               style={{
                 background: colors.primaryColor,
                 color: colors.background,
               }}
            >This is an example Button</div>
          </div>
        </div>
        <div>
          <h2 style={{color: colors.secondaryColorSoft}}>Possible Colors</h2>
          <div className={styles.colorGrid}>
            <ColorBox colors={colors} backgroundAttr='foreground'       colorAttr='background' />
            <ColorBox colors={colors} backgroundAttr='primaryColor' colorAttr='background' />
            <ColorBox colors={colors} backgroundAttr='primaryColorSoft'   colorAttr='foreground' />
            <ColorBox colors={colors} backgroundAttr='secondaryColor' colorAttr='background' />
            <ColorBox colors={colors} backgroundAttr='secondaryColorSoft'   colorAttr='foreground' />
            <ColorBox colors={colors} backgroundAttr='background'       colorAttr='foreground' />
          </div>
          <h2 style={{color: colors.secondaryColorSoft}}>Textures</h2>
          <div className={styles.textureGrid}>
            {textures.map(texture => <Texture key={texture} texture={texture} colors={colors} />)}
          </div>
          <h2 style={{color: colors.secondaryColorSoft}}>Adjectives</h2>
          <div className={styles.adjectiveGrid}>
            {adjectives.map((adjective) => <Adjective colors={colors} adjective={adjective} key={adjective} />)}
          </div>
        </div>
      </div>
    </div>
  )
}
