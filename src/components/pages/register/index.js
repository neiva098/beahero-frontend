import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import './style.css'
import logoImg from '../../../assets/logo.svg'

class Register extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div className='register-container'>
        <div className='content'>
            <section>
                  <img src={logoImg} alt='Be the Hero'></img>
                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                  <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#E02041'/>
                    Tenho cadastro
                  </Link>
            </section>
            
            <form>
              <input placeholder='Nome da ONG'></input>
              <input type='email' placeholder='E-mail'></input>
              <input placeholder='Whatsapp'></input>
              <div className='input-group'>
                <input placeholder='Cidade'></input>
                <input placeholder='Uf' style={{width: 80}}></input>
              </div>
              <button className='button' type='submit'>Cadastrar</button>
            </form>
        </div>
      </div>
    ) 
  }
}

export default Register;