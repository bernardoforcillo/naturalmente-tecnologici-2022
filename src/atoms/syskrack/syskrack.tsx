import React from 'react';
import * as styles from './syskrack.module.scss';
import { StaticImage } from 'gatsby-plugin-image';

const Syskrack = () => {
  return (
    <>
      <a href="https://syskrack.org" target="_blank" rel="noopener noreferrer" className={styles.syskrackMobile}>
        <StaticImage
          src="../../images/compactSyskrack.png"
          alt="Logo Syskrack"
          placeholder="tracedSVG"
          className={styles.syskrack}
          width={60}
        />
      </a>
      <a href="https://syskrack.org" target="_blank" rel="noopener noreferrer" className={styles.syskrackDesktop}>
        <StaticImage
          src="../../images/compactSyskrack.png"
          alt="Logo Syskrack"
          placeholder="tracedSVG"
          className={styles.syskrack}
          width={90}
        />
      </a>
    </>
  );
};

export default Syskrack;
