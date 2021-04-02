import React, { Component } from 'react'
export default class A extends React.Component {
  constructor() {
    super()
  }
  getName() {
    this.name = 'limiao'
    return this.name
  }
  getAge() {
    this.age = '20'
    return this.age
  }
}
