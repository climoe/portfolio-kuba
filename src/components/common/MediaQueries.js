import { css } from 'styled-components'

const sizes = {
  desktop: 1880,
  xlaptop: 1700,
  mlaptop: 1500,
  laptop: 1200,
  tablet: 900,
  phone: 650,
  sphone: 480,
  sphone2: 400,
  xsphone: 320 
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const print = (...args) => css`
    @media print {  
      ${css(...args)}
    }
  `