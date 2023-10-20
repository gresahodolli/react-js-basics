import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    //In your code snippet, you're using this.setState as a method, which is the correct way to update the state in React. 
    //However, there is still an issue in how you are trying to log the state immediately after updating it.
    // increment() {
    //     this.setState=({
    //         count: this.state.count + 1
    //     })
    //     console.log(this.state.count)
    // }
   
    //The issue here is that this.setState is asynchronous, and the state update may not be immediately 
    //reflected when you log this.state.count. Instead, you should use a callback function provided by this.setState to log the state correctly:
    // increment() {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {
    //         console.log(this.state.count); // This log should reflect the updated count.
    //     });
    // }
    
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count); // This log should reflect the updated count.
        // });
       

        this.setState( (prevState, props)=> ({
            count: prevState.count + 1 
        }))
        console.log(this.state.count)
    }
    
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    

  render() {
    return (
      <div>
            <div>Count - {this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
      </div>

    )
  }
}

export default Counter