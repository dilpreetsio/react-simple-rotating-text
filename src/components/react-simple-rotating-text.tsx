import './index.css'
import { useEffect, useRef, useState } from 'react'
interface Props {
  texts: string[]
  duration?: number
  className?: string
  color?: string
  direction?: 'vertical' | 'horizontal'
}

const RotatingText = ({
  texts,
  duration = 2.5,
  direction = 'vertical',
  className,
  color
}: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const createTextElement = (text: string, startTime: number) => {
    const textElement = document.createElement('span')
    textElement.innerHTML = `&nbsp;${text}&nbsp;`
    textElement.style.animation = `${direction}-rotate ${duration * texts.length}s ease-in-out infinite 0s`
    textElement.style.animationDelay = `${startTime}s`
    textElement.style.color = color || 'inherit'
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

  return <span className='rotating-text-container' ref={containerRef}></span>
}

export default RotatingText
