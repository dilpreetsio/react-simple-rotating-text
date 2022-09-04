import React from 'react'
import styles from './styles.module.css'

const RotatingText = ({
  texts,
  color = '#000000',
  delay = 2.5,
  type = 'vertical'
}) => {
  const createText = (text, startTime) => (
    <span
      className={styles.rotatingWrapper}
      style={{
        animation: `${styles[`${type}`]} ${
          delay * texts.length
        }s linear infinite 0s`,
        animationDelay: `${startTime}s`,
        color: color
      }}
    >
      {text}
    </span>
  )

  return (
    <span className={styles.rotatingText}>
      {texts.map((text, i) => createText(text, i * delay))} &nbsp;
    </span>
  )
}

export default RotatingText
