import React, {Component} from 'react'

export default class App extends Component {
  headingClick() {
    console.log('HAHAHAH');
  }

  render() {
    return (
      <h1 onClick={this.headingClick}>Hello! {hello}</h1>
    )
  }
}
