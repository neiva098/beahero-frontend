import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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

                <Link to='/register' className='back-link'>
                    Não tenho Cadastro
                    <FiLogIn size={16} color='#E02041'/>
                </Link>
              </form>
          </section>
          <img src={heroesImg} alt='heroes'></img>
      </div>
    )
  }
}

export default LogIn;
