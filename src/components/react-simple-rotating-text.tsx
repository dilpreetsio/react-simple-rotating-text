import './index.css'
import { useEffect, useRef, useState } from 'react'
interface Props {
  texts: string[]
  duration?: number
  className?: string
  color?: string
  direction?: 'vertical' | 'horizontal'
  backgroundColors?: string[]
  colors?: string[]
  animateByLetters?: boolean
  animation?: string
}

const ANIMATION_NAMES = ['fade', 'slide', 'scale']

const RotatingText = ({
  texts,
  duration = 2.5,
  direction = 'vertical',
  className,
  color,
  backgroundColors,
  colors,
  animation = 'fade'
}: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const word = [...texts].sort(function (a, b) {
    return b.length - a.length
  })[0]

  const getAnimationName = () => {
    if (ANIMATION_NAMES.includes(animation.toLowerCase())) {
      if (
        animation.toLowerCase() == 'fade' ||
        animation.toLowerCase() == 'scale'
      ) {
        return animation.toLowerCase()
      } else {
        return `${direction}-${animation}`
      }
    } else {
      console.error('Missing animation name')
    }
  }

  const createTextElement = (text: string, startTime: number) => {
    const textElement = document.createElement('span')
    textElement.innerHTML = `${text}`
    textElement.style.animation = `${getAnimationName()} ${duration}s ease-in-out infinite 0s`
    textElement.style.animationDelay = `${startTime}s`
    textElement.style.padding = `0 .5rem`
    textElement.style.color =
      colors && colors.length > 0 ? colors[currentIndex] : color || '#fff'
    textElement.style.backgroundColor =
      backgroundColors && backgroundColors.length > 0
        ? backgroundColors[currentIndex]
        : ''
    textElement.className = className || ''
    return textElement
  }

  const runAnimation = (index: number) => {
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(createTextElement(texts[index], 0))
    }
  }

  useEffect(() => {
    runAnimation(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    function tick() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }

    let timer = setInterval(tick, duration * 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <span className='rotating-text-container' ref={containerRef}></span>
      <span style={{ opacity: '0' }}> {word}</span>
    </>
  )
}

export default RotatingText
