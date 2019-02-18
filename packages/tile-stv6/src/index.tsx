/**
 * @class StyleTile
 */

import * as React from 'react'
import styles from './styles.css'

export type TileColors = {
  background: string,
  foreground: string,
  foregroundAccent: string,
  backgroundAccent: string,
  foregroundSoft: string,
  backgroundSoft: string,
  foregroundEmph: string,
}

const defaultColors = {
  background: 'white',
  foreground: 'black',
  backgroundAccent: 'blue',
  foregroundAccent: 'red',
  backgroundSoft: 'lightblue',
  foregroundSoft: 'coral',
  foregroundEmph: 'coral',
}


export type TileProps = {
  projectName: string,
  logoSRC: string,
  tileVersion: number,
  colors?: TileColors,
  fontFamily?: string,
  textures?: string[],
  adjectives?: string[],
}

export default ({
  colors = defaultColors,
  fontFamily = '"Lucida Grande","Arial",sans-serif',
  textures = [],
  adjectives = [],
  projectName,
  tileVersion,
  logoSRC
}: TileProps) => {
  return (
    <div className={styles.tile} style={{
      fontFamily: fontFamily,
      color: colors.foreground,
      background: colors.background,
    }}>
        <div className={styles.header}>
          <div
            className={styles.topBar}
            style={{
              color: colors.background,
              background: colors.foregroundSoft,
            }}
          >
            <div
               className={styles.logo}
               style={{
                 backgroundImage: `url(${logoSRC})`,
                 backgroundColor: colors.foregroundEmph,
               }}
            />
            <div className={styles.headerRight}> {projectName} </div>
          </div>
          <div style={{
            backgroundColor: styles.background,
            color: styles.foreground
          }}
          >
            <h3 style={{color: colors.foregroundEmph}} className={styles.headerRight}>Style Tile</h3>
            <h4 style={{color: colors.foregroundSoft}} className={styles.headerRight}>Version {tileVersion}</h4>
          </div>
      </div>
      <div className={styles.halves}>
        <div>
          <h1 style={{color: colors.foregroundAccent}}>This is an example of a header</h1>
          <h5 style={{color: colors.foregroundSoft}}>Font Family: {fontFamily}</h5>
          <h2 style={{color: colors.foregroundEmph}}>This is a Subhead</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
            Duis autem vel feugait nulla facilisi.
          </p>
          <p>
            <a style={{color: colors.backgroundAccent}} href="#">This is an example link</a>
          </p>
          <div className={styles.buttonGrid}>
            <div
               className={styles.button}
               style={{
                 background: colors.backgroundAccent,
                 color: colors.background,
               }}
            >This is an example Button</div>
          </div>
        </div>
        <div>
          <h2 style={{color: colors.foregroundEmph}}>Possible Colors</h2>
          <div className={styles.colorGrid}>
            <div
              className={styles.colorBox}
              style={{
                background: colors.backgroundAccent,
                color: colors.background
              }}
            >backgroundAccent</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.foregroundAccent,
                color: colors.background
              }}
            >foregroundAccent</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.foregroundEmph,
                color: colors.background
              }}
            >forgroundEmph</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.backgroundSoft,
                color: colors.foreground
              }}
            >backgroundSoft</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.foregroundSoft,
                color: colors.background
              }}
            >foregroundSoft</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.foreground,
                color: colors.background
              }}
            >foreground</div>
            <div
              className={styles.colorBox}
              style={{
                background: colors.background,
                color: colors.foreground
              }}
            >background</div>
          </div>
          <h2 style={{color: colors.foregroundEmph}}>Textures</h2>
          <div className={styles.textureGrid}>
            {textures.map((texture) => {
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
            })}
          </div>
          <h2 style={{color: colors.foregroundEmph}}>Adjectives</h2>
          <div className={styles.adjectiveGrid}>{
            adjectives.map((adjective) => {
              const adjColors = [
                colors.backgroundAccent,
                colors.foregroundEmph,
                colors.backgroundSoft,
                colors.foreground,
                colors.foregroundAccent,
                colors.foregroundSoft
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
            })
          }</div>
        </div>
      </div>
    </div>
  )
}
