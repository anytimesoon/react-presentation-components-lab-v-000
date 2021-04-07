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
    this.setState(previousState => {
    	const newMood = (previousState.mopd === 'happy' ? 'sad' : 'happy')
      return {
        mood: 'sad'
      }
    })
  }
  
  render(){
    return <div onClick={this.handleClick()}>
    
              {this.state.mood}
          
            </div>
  }
}