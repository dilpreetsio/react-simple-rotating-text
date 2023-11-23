import './index.css'
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
  const createText = (text: string, startTime: number) => (
    <span
      key={text + startTime}
      style={{
        animation: `${direction}-rotate ${
          duration * texts.length
        }s linear infinite 0s`,
        animationDelay: `${startTime}s`,
        color: color || 'inherit'
      }}
      className={className || ''}
    >
      {text}
    </span>
  )

  return (
    <>
      <span className='rotating-text-container'>
        {texts.map((text, i) => createText(text, i * duration))} &nbsp;
      </span>
    </>
  )
}

export default RotatingText
