# react-simple-rotating-text

> A simple rotating animation text component

[![NPM](https://img.shields.io/npm/v/react-simple-rotating-text.svg)](https://www.npmjs.com/package/react-simple-rotating-text) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

![Demo gif](/demo.gif)

## Install

```bash
npm install --save react-simple-rotating-text
```

## Usage

```jsx
import React, { Component } from 'react'
import RotatingText from 'react-simple-rotating-text'
import 'react-simple-rotating-text/dist/index.css'

class Example extends Component {
  render() {
    return <RotatingText texts={['hello', 'world']} />
  }
}
```

## Properties

| propery   | description                | required | default  | allowed values        |
| --------- | -------------------------- | -------- | -------- | --------------------- |
| texts     | An array of strings        | true     |          |                       |
| color     | Hex value of color         | false    | black    | hex code of color     |
| duratrion | duration of the animation  | false    | 2.5s     | number                |
| direction | direction of animation     | false    | vertical | horzontal or vertical |
| className | Custom classes for styling | false    |          |

## License

MIT © [dilpreetsio](https://github.com/dilpreetsio)
