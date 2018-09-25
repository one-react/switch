import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  isChecked: boolean
  onChange: (isChecked) => void
}
export class Switch extends PureComponent<Props, {}> {
  state = {
    isChecked: this.props.isChecked
  }
  render() {
    const isActive = this.state.isChecked
    const switchClass = clx(
      {
        'or-switch-checked': isActive
      },
      'or-switch'
    )
    return (
      <div className={switchClass} onClick={this.handleClick}>
        <div className="switch-circle" />
      </div>
    )
  }

  handleClick = () => {
    this.setState(
      {
        isChecked: !this.state.isChecked
      },
      () => {
        this.props.onChange(this.state.isChecked)
      }
    )
  }
}
