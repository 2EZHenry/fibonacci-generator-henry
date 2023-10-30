import React from 'react'
import styles from './styles.module.css'
import Fibonacci from './components/Fibonacci'

export const ExampleComponent = () => {
  return (
    <div className={styles.test}>
      Fibonacci Generator
      <Fibonacci />
    </div>
  )
}
