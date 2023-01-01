import {css, Global} from '@emotion/react';
import {IBM_Plex_Sans} from '@next/font/google';
import React from 'react';

import {colors, formatterColor} from './colors';

export {maxDevice, minDevice, size} from './device';

export const theme = {
  colors,
  formatterColor,
};

export const ibmplexsans400 = IBM_Plex_Sans({weight: '400'});

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      html,
      body {
        //background: linear-gradient(-45deg, #7dc6e3, #f3d7df, #ffffff, #73ccb6);
        //background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        transition: 0s;
        font-size: 1.125rem;
        line-height: 1.5rem;
        background-color: #fff;
        color: #181818;
        padding: 0;
        margin: 0;
        font-family: ${ibmplexsans400.style.fontFamily};
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes logosRunningLine {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-100% + 100vw));
        }
      }

      a {
        background: 0 0;
        text-decoration: none;
        cursor: pointer;

        &:not([href]) {
          cursor: initial;
        }
      }

      a:hover {
        background: linear-gradient(90deg, #fe00dd -56.25%, #fd0009 135.94%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      a:active,
      a:hover {
        outline: 0;
      }

      * {
        box-sizing: border-box;

        *::before,
        *::after {
          box-sizing: border-box;
        }

        &:not(iframe) {
          transition: 0.25s ease;
          transition-property: background, border, color, left, margin, padding, right, opacity;
        }
      }

      ::selection {
        background: #828290;
        color: #fff;
      }
    `}
  />
);
