import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../../services/api'
import './style.css'
import logoImg from '../../../assets/logo.svg'

class Profile extends Component{
  constructor(props){
    super(props)
    this.state = {
        incidents: [],
        ongName: localStorage.getItem('ongName')
    }
  }

  async componentDidMount() {
    const { data } = await api.get('/icidents/query', {headers: {authorization: localStorage.getItem('ongId')}})
    this.setState({incidents: data})
  }

  render() {
    return(
      <div className='profile-container'>
          <header>
              <img src={logoImg} alt='Be the Hero'></img>
              <span>Bem Vinda, {this.state.ongName}</span>
              <Link className='button' to='/incidents/new'>Cadastrar novo caso</Link>
              <button type='button'>
                  <FiPower size={18} color='#E02041'/>
              </button>
          </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {
                    this.state.incidents.map(incident => {
                        return (
                            <li>
                                <strong>>Caso:</strong>
                                <p>{incident.title}</p>

                                <strong>Descrição</strong>
                                <p>{incident.description}</p>

                                <strong>Valor</strong>
                                <p>{incident.value}</p>

                                <button type='button'>
                                    <FiTrash2 size={20} color='#a8a8b3'></FiTrash2>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
      </div>
    ) 
  }
}

export default Profile;