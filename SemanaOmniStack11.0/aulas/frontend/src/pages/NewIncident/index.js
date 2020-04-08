import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();

    const history = useHistory();

    async function handleIncidents(e) {
        e.preventDefault();

        const data = { title, description, value }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            alert(`Caso cadastrado com sucesso.`);
            history.push('/profile');
        } catch (err) {
            alert('Erro no cadastro do caso, tente novamente.');
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a home
                    </Link>
                </section>

                <form onSubmit={handleIncidents}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor do caso"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />

                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}