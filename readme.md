# One React Component: switch

<p align="center"><img width="150" src="https://cdn.rawgit.com/one-react/assets/master/logo%402x.png" alt="logo"></p>

[![TravisCI Build](https://img.shields.io/travis/one-react/switch.svg)](https://travis-ci.org/one-react/switch)
[![CircieCI Build](https://img.shields.io/circleci/project/github/one-react/switch.svg)](https://circleci.com/gh/one-react/switch)
[![Coverage](https://img.shields.io/codecov/c/github/one-react/switch.svg)](https://codecov.io/gh/one-react/switch) 
[![Version](https://img.shields.io/npm/v/or-switch.svg)](https://www.npmjs.com/package/or-switch)
[![Chat](https://img.shields.io/gitter/room/one-react-org/Lobby.svg)](https://gitter.im/one-react-org/Lobby)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Greenkeeper badge](https://badges.greenkeeper.io/one-react/switch.svg)](https://greenkeeper.io/) 

## Installation
```
// with npm
npm install or-switch

// with yarn
yarn add or-switch
```

## Usage
- Config webpack `sass-loader` if you are using webpack.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Basic Example

```jsx
import React, { PureComponent } from 'react'

import Switch from 'or-switch'

class Example extends PureComponent {
  state = {
    value1: false,
    value2: true
  }

  render() {
    return (
      <div>
        <div className="title">
          是否开启: {this.state.value1 ? 'YES' : 'NO'}
        </div>
        <Switch
          className="hello"
          isChecked={this.state.value1}
          onChange={this.handleChange('value1')}
        />
        <div className="title">
          是否开启: {this.state.value2 ? 'YES' : 'NO'}
        </div>
        <Switch
          isChecked={this.state.value2}
          onChange={this.handleChange('value2')}
        />
      </div>
    )
  }

  handleChange = valueKey => {
    return isChecked => {
      this.setState({
        [`${valueKey}`]: isChecked
      })
    }
  }
}

export default Example

```

## API

```ts
interface Props {
  /**
   * custom className
   **/
  className?: string
  /**
   * whether the switch is checked or not
   **/
  isChecked: boolean

  /**
   * callback triggered by click
   **/
  onChange: (isChecked) => void
}
```

## Customize Theme
**Customize in webpack**

The following variables in or-switch can be overridden:

```scss
$or-switch-active-color: $or-basic-blue !default;
$or-switch-inactive-color: $or-gray4 !default;
```

Alternatively, you can override variables from [or-theme](https://github.com/one-react/theme/blob/master/src/variables.scss) to keep all or-components in a unified theme style.

First you should create a `theme.scss` file to declare the variables you want to override.

Then use the [data](https://github.com/webpack-contrib/sass-loader#environment-variables)  option provided by `sass-loader` to override the default values of the variables.

We take a typical `webpack.config.js` file as example to customize it's sass-loader options.

```js
// webpack.config.js
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        data: fs.readFileSync(path.resolve(__dirname, 'theme.scss')) // pass theme.scss to sass-loader
      }
    }
  ],
  include: [
    /node_modules\/or\-\w+/ //include or-components
  ]
}
```

## Demos and Docs
> powered by [storybook](https://storybook.js.org/)

[Click Here](https://one-react.github.io/switch)

## License

MIT &copy; foryuki
