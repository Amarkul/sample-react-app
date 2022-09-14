import React, { Component } from 'react'

class Message extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'welcome  visitor'
      }
    }

    changeHandler(){
        this.setState({
            message: 'Thank you for subscribe'
        })
    }

  render() {
    return (
      <div> 
          <h1>{this.state.message}</h1>
          <button onClick={()=>this.changeHandler()}>Subscribe</button>
      </div>
    )
  }
}

export default Message