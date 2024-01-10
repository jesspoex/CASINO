import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          STOKUN
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          SLOT EVERYDAY.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          
        </div>
      </Section>
    </div>
  )
}
