import { mount } from 'enzyme'
import React, { PureComponent } from 'react'

import Switch from '../src'

const mockCallBack = jest.fn()
let wrapper
describe('src/index', () => {
  describe('should render properly', () => {
    it('#className', () => {
      wrapper = mount(<SwitchWrapper defaultChecked={true} className="hello" />)
      expect(wrapper.find('.or-switch').length).toBe(1)
      expect(wrapper.find('.or-switch').hasClass('hello')).toBe(true)
    })
  })

  describe('defalult checked', () => {
    beforeEach(() => {
      wrapper = mount(<SwitchWrapper defaultChecked={true} />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('should render properly: checked', () => {
      expect(wrapper.find('.or-switch').length).toBe(1)
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        true
      )
    })

    it('simulates click events', () => {
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        true
      )
      wrapper.find('.or-switch').simulate('click')
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        false
      )
    })
  })

  describe('default not checked', () => {
    beforeEach(() => {
      wrapper = mount(<SwitchWrapper defaultChecked={false} />)
    })

    afterEach(() => {
      wrapper.unmount()
      mockCallBack.mockReset()
    })

    it('should render properly: not checked', () => {
      expect(wrapper.find('.or-switch').length).toBe(1)
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        false
      )
    })

    it('simulates click events', () => {
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        false
      )
      wrapper.find('.or-switch').simulate('click')
      expect(wrapper.find('.or-switch').hasClass('or-switch-checked')).toBe(
        true
      )
    })
  })
})

interface Props {
  defaultChecked: boolean
  className?: string
}

class SwitchWrapper extends PureComponent<Props, {}> {
  state = {
    value: this.props.defaultChecked
  }

  render() {
    return (
      <Switch
        isChecked={this.state.value}
        className={this.props.className}
        onChange={this.handleChange}
      />
    )
  }

  handleChange = isChecked => {
    this.setState({
      value: isChecked
    })
  }
}
