import { BrowserRouter, Route} from 'react-router-dom'
import React, { Component } from 'react'

import LogIn from './components/pages/logOn'
import Register from './components/pages/register'

class Routes extends Component{
    constructor(props){
      super(props)
      this.state = {
  
      }
  
    }
  
    render() {
      return(
        <BrowserRouter>
            <switch>
                <Route path='/' exact component={LogIn}></Route>
                <Route path='/register' component={Register}></Route>
            </switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;