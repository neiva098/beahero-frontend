import React, { Component } from 'react'
import LogIn from './components/pages/logOn'
import './global.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div>
        <LogIn/>
      </div>
    )
  }
}

export default App;
