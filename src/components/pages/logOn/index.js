import React, { Component } from 'react'
import './style.css'
import heroesImg from '../../../assets/heroes.png'
import logoImg from '../../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'

class LogIn extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div className='logon-container'>
          <section className='form'>
              <img src={logoImg} alt='Be the Hero'></img>
              <form>
                <h1>Faça seu logIn</h1>
                <input placeholder='Sua ID'></input>
                <button type='submit' className='button'>Entrar</button>

                <a href='/register'>
                    Não tenho Cadastro
                    <FiLogIn size={16} color='#E02041'/>
                </a>
              </form>
          </section>
          <img src={heroesImg} alt='heroes'></img>
      </div>
    )
  }
}

export default LogIn;
