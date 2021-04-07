// Code SimpleComponent Here
import React, {Component} from 'react'

export default class SimpleComponent extends Component {
  constructor(){
    super()
    
    this.state = {
                mood: 'happy'
              }
  }
  
  handleClick = (e) => {
    this.setState(previousState => {
    	const newMood = (previousState.mopd === 'happy' ? 'sad' : 'happy')
      return {
        mood: 'sad'
      }
    })
  }
  
  render(){
    return <div onClick={e => this.handleClick(e)}>
    
              {this.state.mood}
          
            </div>
  }
}