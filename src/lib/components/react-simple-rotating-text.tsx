import './react-simple-rotating-text.css'

interface Props {
  texts: string[]
  color?: string
  delay?: number
  type?: 'vertical' | 'horizontal'
}
const RotatingText = ({
  texts,
  color = '#000000',
  delay = 2.5,
  type = 'vertical'
}: Props) => {
  const createText = (text: string, startTime: number) => (
    <span
      style={{
        animation: `${type}-rotate ${delay * texts.length}s linear infinite 0s`,
        animationDelay: `${startTime}s`,
        color: color
      }}
    >
      {text}
    </span>
  )

  return (
    <span className='rotating-text-container'>
      {texts.map((text, i) => createText(text, i * delay))} &nbsp;
    </span>
  )
}

export default RotatingText
