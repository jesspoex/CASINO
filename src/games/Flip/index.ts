import React from 'react'
import image from './logo.png'

export default {
  name: 'Flip',
  short_name: 'flip',
  description: `
    Pick Heads or Tails. Double your money or go broke. Simple as.
  `,
  creator: '89mdwFVhcGT5nYzHNABcaiVaQuENnb39jimQ6qczSrQo',
  image,
  theme_color: 'rgb(255 218 121)',
  app: React.lazy(() => import('./App')),
}
