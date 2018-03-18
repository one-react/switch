import React, { Component } from 'react'

import { Switch } from '../../src'

class Controlled extends Component {
  state = {
    value: false
  }

  render () {
    return (
      <div>
        <Switch checked={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    )
  }

  handleChange = checked => {
    this.setState({
      value: checked
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    window.alert('switch is ' + this.state.value)
  }
}

export default Controlled
