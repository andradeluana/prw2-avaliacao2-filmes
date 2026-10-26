import '../Formulario.css';
import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Create() {
    const [values, setValues]=useState({
        nome:'',
        genero:'',
        ano:''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://6ad252f466cd28aed82de50d.mockapi.io/filmes',values)
            .then(res=>{
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    }

  return (
     <div className='formulario-pagina fundo-creme'>
        <div className='formulario'>
            <h1>ADICIONAR FILME</h1>

            <form onSubmit={handleSubmit}>

                <div className='mb-2'>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" name='nome' className='form-control'
                        placeholder='Digite o nome'
                        onChange={e=> setValues({...values,nome: e.target.value})}
                    />
                </div>

                <div className='mb-2'>
                    <label htmlFor="genero">Genero:</label>
                    <input type="text" name='genero' className='form-control'
                        placeholder='Digite o genero'
                        onChange={e=> setValues({...values,genero: e.target.value})}
                    />
                </div>

                <div className='mb-5'>
                    <label htmlFor="ano">Ano:</label>
                    <input type="text" name='ano' className='form-control'
                        placeholder='Digite o Ano'
                        onChange={e=> setValues({...values,ano: e.target.value})}
                    />
                </div>

                <button className='btn btn-principal'>Criar</button>
                <Link to="/" className='btn btn-cancelar ms-3'>Cancelar</Link>
            </form>
        </div>
    </div>
  )
}

export default Create;