import { BrowserRouter, Route} from 'react-router-dom'
import React, { Component } from 'react'

import LogIn from './components/pages/logOn'
import Register from './components/pages/register'
import Profile from './components/pages/profile'

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
                <Route path='/profile' component={Profile}></Route>
            </switch>
        </BrowserRouter>
      )
    }
  }
  
  export default Routes;