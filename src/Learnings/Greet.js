import React, { Component } from 'react'

class Greet extends Component {
    
  render() {
      console.log(this.props)
    return (
      <div>
          <h1> Greet {this.props.name} {this.props.lname}</h1>
          {this.props.children}
      </div>
    )
  }
}

export default Greet