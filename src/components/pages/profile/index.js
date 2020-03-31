import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import './style.css'
import logoImg from '../../../assets/logo.svg'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
      <div className='profile-container'>
          <header>
              <img src={logoImg} alt='Be the Hero'></img>
              <span>Bem Vinda, {''}</span>
              <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
              <button type='button'>
                  <FiPower size={18} color='#E02041'/>
              </button>
          </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição Teste</p>

                    <strong>Valor</strong>
                    <p>120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição Teste</p>

                    <strong>Valor</strong>
                    <p>120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição Teste</p>

                    <strong>Valor</strong>
                    <p>120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso Teste</p>

                    <strong>Descrição</strong>
                    <p>Descrição Teste</p>

                    <strong>Valor</strong>
                    <p>120,00</p>

                    <button type='button'>
                        <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                    </button>
                </li>
            </ul>
      </div>
    ) 
  }
}

export default Profile;