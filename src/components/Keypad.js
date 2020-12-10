// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

  inputHandler = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input onKeyUp={ this.inputHandler }  type='password' />
    )
  }
}