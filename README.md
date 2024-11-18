# react-simple-rotating-text

> A simple rotating animation text component for react apps


[![NPM](https://img.shields.io/npm/v/react-simple-rotating-text.svg)](https://www.npmjs.com/package/react-simple-rotating-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo gif](https://raw.githubusercontent.com/dilpreetsio/react-simple-rotating-text/main/demo.gif)


[Live demo](https://playcode.io/2152508)

## Install

```bash
npm install --save react-simple-rotating-text
```

## Usage

### Basic

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']} />
  }
}
```

### Custom colors

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']}
      colors={['red', 'blue']}
    />
  }
}
```

### Custom background colors

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']}
      backgroundColors={['red', 'blue']}
    />
  }
}
```

### Animations

#### Fade

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']}
      animation='fade'
    />
  }
}
```

#### Slide

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']}
      animation='slide'
      direction='vertical'
    />
  }
}
```

#### Scale

```jsx
import React, { Component } from 'react'
import { RotatingText } from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']}
      animation='scale'
    />
  }
}
```

## Properties

| propery   | description                | required | default  | allowed values        |
| --------- | -------------------------- | -------- | -------- | --------------------- |
| texts     | An array of strings        | true     |          |                       |
| colors     | An array of strings of colors       | false    |          | hex code of color     |
| backgroundColors     | An array of strings of background colors       | false    |          | hex code of color     |
| duratrion | duration of the animation  | false    | 2.5s     | number                |
| animation | name of the animation      | false    | fade     | fade, slide, scale |
| direction | direction of animation     | false    | vertical | horzontal or vertical |
| className | Custom classes for styling | false    |          |

## License

MIT © [dilpreetsio](https://github.com/dilpreetsio)
