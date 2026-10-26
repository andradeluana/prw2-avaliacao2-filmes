import '../Formulario.css';
import axios from 'axios';
import React,{ useEffect, useState} from 'react'
import{Link, useParams } from 'react-router-dom';


function Read() {
    const[data,setData] = useState([]);
    const{id} = useParams();

    useEffect( ()=> {
        axios.get('https://6ad252f466cd28aed82de50d.mockapi.io/filmes/'+id)
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    },[]);


  return (
    <div className='formulario-pagina fundo-lona'>
            <div className='formulario'>
                <h3>DADOS DO FILME</h3>
                <div className='mb-2'>
                    <strong>ID: {data.id}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Nome: {data.nome}</strong>
                </div>
                <div className='mb-2'>
                    <strong>Gênero: {data.genero}</strong>
                </div>
                <div className='mb-4'>
                    <strong>Ano: {data.ano}</strong>
                </div>
                <Link to='/' className='btn btn-cancelar'>CANCELAR</Link>
            </div>
        </div>

  )
}

export default Read