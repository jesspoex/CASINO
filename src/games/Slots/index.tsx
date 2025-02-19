import React from 'react'

export default {
  name: 'Slots',
  short_name: 'slots',
  description: `
    Play and pray. At the top of the slot machine you can see your potential rewards. Always fair.
  `,
  creator: '89mdwFVhcGT5nYzHNABcaiVaQuENnb39jimQ6qczSrQo',
  image: new URL('./logo.png', import.meta.url).href,
  theme_color: '#d185ff',
  app: React.lazy(() => import('./App')),
}
