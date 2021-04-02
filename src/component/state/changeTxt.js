import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

export default class ChangeText extends Component {
  constructor(props) {
    super(props)
    console.log('构造器')

    this.state = {
      desc: '欢迎关注微信itclanCoder公众号',
      isStatus: true,
    }
    // this坏境的绑定
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  componentWillMount() {
    console.log('勾子函数componentWillMount')
  }

  componentWillReceiveProps() {
    console.log('勾子函数componentWillReceiveProps', this.props.name)
  }

  componentDidMount() {
    console.log('勾子函数componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('勾子函数shouldComponentUpdate')
    if ((this.props.name = 'limiao')) return false
    return true
  }

  componentWillUnmount() {
    console.log('勾子函数componentWillUnmount')
  }

  componentDidUpdate() {
    console.log('勾子函数componentDidUpdate')
  }

  handleChangeText() {
    this.setState((prevState, newProps) => ({
      isStatus: !prevState.isStatus,
    }))

    this.setState({
      desc: '学习React11',
    })

    // setTimeout(() => {
    //   this.setState({
    //     desc: '学习React11',
    //   })
    // }, 0)
  }

  render() {
    console.log('render变化了')
    const name = this.state.isStatus ? this.props.name : '随笔川迹'
    const age = this.state.isStatus ? this.props.age : 20
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <div>{this.state.desc}</div>
          <div>
            {name},永远的{age}岁
          </div>
          <button onClick={this.handleChangeText}>点击按钮改变上方文字</button>
        </div>
      </Fragment>
    )
  }
}

ChangeText.defaultProps = {
  name: '川川',
  age: 25,
}

ChangeText.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}
