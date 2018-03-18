import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import { Switch } from '../../src'

import Controlled from './controlled'

storiesOf('Switch', module)
  .add('switch', () => (
    <div>
      <div>蓝牙?</div>
      <Switch checked onChange={(isChecked) => { console.log(isChecked) }} />
      <div>开挂模式?</div>
      <Switch onChange={(isChecked) => { console.log(isChecked) }} />
    </div>
  ))
  .add('Controlled', () => (
    <Controlled />
  ))
