import React, { Component } from 'react'
@testable
class MyClass extends React.Component {
  constructor() {
    super()
  }
  render() {
    return <div>"www==="{this.isTestable}"isTestable"</div>
  }
}

function testable(target) {
  target.isTestable = true
}

export default MyClass
