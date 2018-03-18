import React from 'react'
import clx from 'classnames'

class Switch extends React.Component {
  state = {
    checked: this.props.checked
  }
  render () {
    const active = this.state.checked
    const switchClass = clx({
      'or-switch': true,
      active
    })
    return (
      <div className={switchClass} onClick={this.handleClick}>
        <div className='switch-circle' />
      </div>
    )
  }

  handleClick = () => {
    this.setState({
      checked: !this.state.checked
    }, () => {
      this.props.onChange(this.state.checked)
    })
  }
}

export default Switch
