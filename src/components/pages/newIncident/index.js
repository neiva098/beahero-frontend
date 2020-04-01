import React, { Component } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logoImg from '../../../assets/logo.svg'
import './style.css'

class NewIncidend extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

  }

  render() {
    return(
        <div className='new-incident-container'>
          <div className='content'>
              <section>
                    <img src={logoImg} alt='Be the Hero'></img>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um héroi para resolver isso.</p>
                    <Link className='back-link' to='/profile'>
                      <FiArrowLeft size={16} color='#E02041'/>
                      Voltar para Home
                    </Link>
              </section>
              
              <form>
                <input placeholder='Titulo do Caso'></input>
                <textarea placeholder='Descrição'></textarea>
                <input placeholder='Valor em Reais'></input>
                <button className='button' type='submit'>Cadastrar</button>
              </form>
          </div>
        </div>
      ) 
  }
}

export default NewIncidend;
