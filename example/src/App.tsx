import React from 'react'
import { RotatingText } from '../../src/lib'
const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <div
          style={{
            padding: '10px',
            fontSize: '3rem',
            fontWeight: 800,
            lineHeight: 1.2,
            textAlign: 'center'
          }}
        >
          Beautiful rotating
          <RotatingText
            texts={['One', 'Two', 'Three', 'Four', 'Five']}
            backgroundColors={['red', 'blue', 'green', 'yellow', 'black']}
            duration={1.5}
            direction='vertical'
          />
        </div>
      </header>
    </div>
  )
}

export default App
