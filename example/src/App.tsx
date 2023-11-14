import React from 'react'
import RotatingText from '../../src/lib/components/react-simple-rotating-text'

const App = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 400,
            lineHeight: 1.2,
            textAlign: 'center'
          }}
        >
          Create beautiful{' '}
          <RotatingText
            texts={['demo videos', 'product videos', 'marketing videos']}
            delay={2}
          />
          <br />
          with the app
        </h1>
      </header>
    </div>
  )
}

export default App
