import clx from 'classnames'
import React, { PureComponent } from 'react'

interface Props {
  /**
   * whether the switch is checked or not
   **/
  isChecked: boolean

  /**
   * callback triggered by click
   **/
  onChange: (isChecked) => void
}

export class Switch extends PureComponent<Props, {}> {
  render() {
    const isChecked = this.props.isChecked
    const switchClass = clx(
      {
        'or-switch-checked': isChecked
      },
      'or-switch'
    )
    return (
      <div className={switchClass} onClick={this.handleClick}>
        <div className="or-switch-circle" />
      </div>
    )
  }

  handleClick = () => {
    const { onChange, isChecked } = this.props
    if (onChange) {
      onChange(!isChecked)
    }
  }
}
