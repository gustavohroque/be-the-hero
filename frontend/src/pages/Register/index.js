import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    /**
     * preventDefault Evita recarregar a paginao ao submit do conteudo do form 
     */
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post('ongs', data);
      alert(`Seu ID de Acesso ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert(`Erro no cadastro`);      
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontararem os casos da sua ONG.</p>

          <Link className='back-link' to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho cadastro
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input 
            placeholder="Nome da ONG"
            value={name}
            // e.target.value representa o valor do input
            onChange={ e => setName(e.target.value)}
          />
          <input 
          type="email" 
          placeholder="E-mail" 
          value={email}
          // e.target.value representa o valor do input
          onChange={ e => setEmail(e.target.value)}
          /> 
          <input 
          placeholder="Whatsapp" 
          value={whatsapp}
          // e.target.value representa o valor do input
          onChange={ e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
          <input 
          placeholder="Cidade" 
          value={city}
          // e.target.value representa o valor do input
          onChange={ e => setCity(e.target.value)}
          />
          <input 
          placeholder="UF" 
          style={{ width: 80 }} 
          
          value={uf}
          // e.target.value representa o valor do input
          onChange={ e => setUf(e.target.value)}
          />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}