import React, { Component } from 'react'

function HOC(Component) {
  return class wrapComponent extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        name: 'alien',
        age: '30',
      }

      this.handlerSingle = this.handlerSingle.bind(this)
    }

    componentWillMount() {
      console.log('hoc ---wrapComponent')
    }

    componentDidMount() {
      console.log('hoc ---componentDidMount')
    }

    handlerSingle() {
      console.log('--handlerSingle--')
    }

    render = () => (
      <div>
        <Component
          {...this.props}
          {...this.state}
          onChange={this.handlerSingle}
        />
      </div>
    )
  }
}

class HocFunc extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    console.log('HocFunc ---wrapComponent')
  }

  componentDidMount() {
    console.log('HocFunc ---componentDidMount')
  }

  say() {
    const { name } = this.props
    console.log(name, this.props)
    this.props.onChange()
  }

  render() {
    return (
      <div>
        hello,world <button onClick={this.say.bind(this)}>点击</button>
      </div>
    )
  }
}

export default HOC(HocFunc)
//export default HocFunc
