import clx from 'classnames'
import React, { PureComponent } from 'react'

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

export class Switch extends PureComponent<Props, {}> {
  render() {
    const { isChecked, className } = this.props
    const switchClass = clx(
      {
        'or-switch-checked': isChecked
      },
      'or-switch',
      className
    )
    return (
      <div className={switchClass} onClick={this.handleClick}>
        <div className="or-switch-circle" />
      </div>
    )
  }

  handleClick = () => {
    const { onChange, isChecked } = this.props
    /* istanbul ignore next */
    if (typeof onChange === 'function') {
      onChange(!isChecked)
    }
  }
}
