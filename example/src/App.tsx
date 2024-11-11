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
          Beautiful rotating{' '}
          <RotatingText
            texts={['One', 'Two', 'Three', 'Four', 'Five']}
            duration={1.5}
            className='gradient-text'
            direction='vertical'
          />
        </div>
      </header>
    </div>
  )
}

export default App
