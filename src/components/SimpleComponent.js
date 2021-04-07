// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()
    
    this.state = {
                mood: 'happy'
              }
  }
  
  handleClick = () => {
    setState(prevState => {
      mood: prevState.mood === 'happy' ? 'sad' : 'happy'
    })
  }
  
  render(){
    return <div onClick={this.handleClick}>
    
              {this.state.mood}
          
            </div>
  }
}