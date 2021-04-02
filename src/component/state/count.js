import React, { Fragment, Component } from 'react'
import ChangeText from './changeTxt'
import HocFunc from '../hoc/hoc'
import MyClass from '../hoc/testHoc'
import B from '../hoc/B'

export default class Count extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 10,
      name: 'limiao',
    }

    // this坏境的绑定
    this.handleBtnIncrease = this.handleBtnIncrease.bind(this)
    this.handleBtnReduce = this.handleBtnReduce.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: 'center' }}>
          <button onClick={this.handleBtnReduce}>-</button>
          <span className="text">{this.state.count}</span>
          <button onClick={this.handleBtnIncrease}>+</button>
          <button id="btn-add">另加</button>
        </div>
        <ChangeText name={this.state.name}></ChangeText>
        <HocFunc testProp="testProp"></HocFunc>
        <MyClass></MyClass>
        <B></B>
      </Fragment>
    )
  }
  // 通过React绑定监听的onClick事件类型绑定的方法内的setState方法都是异步的
  handleBtnReduce() {
    this.setState({
      count: this.state.count - 1,
    })
    console.log('点击减-count值', this.state.count)
  }

  handleBtnIncrease() {
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
      console.log('点击加+count的值', this.state.count)
    }, 0)
  }

  // 非React绑定的事件类型方法内调用的setState,是同步的
  componentDidMount() {
    const btnAdd = document.getElementById('btn-add')
    btnAdd.addEventListener('click', () => {
      this.setState({
        count: this.state.count + 1,
        name: 'changename',
      })
      console.log(this.state.count)
    })
  }
}
