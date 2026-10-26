import '../Formulario.css';
import axios from 'axios';
import React,{useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

function Delete() {
    const [id, setId] = useState('');
    const [data, setData] = useState(null);
    const [encontrou, setEncontrou] = useState(null);
    
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!id.trim()) {
        setEncontrou(false);
        return;
        }
        axios.get('https://6ad252f466cd28aed82de50d.mockapi.io/filmes/'+id)
            .then(res => { setData(res.data); setEncontrou(true);})
            .catch(err => {console.log(err); setData(null); setEncontrou(false)});
    }

    const handleDelete = () => {
      axios.delete('https://6ad252f466cd28aed82de50d.mockapi.io/filmes/' + id)
          .then(res => {navigate('/');})
          .catch(err => console.log(err));
    }



  return (
    <div className='formulario-pagina fundo-creme'>
               
        <div className='formulario'>
    
          <h3>APAGAR FILME</h3>

          {encontrou === null && (
              <>
                  <div className='mb-4'>
                      <label>ID do Filme:</label>
                                          
                      <input
                          type='text' className='form-control'placeholder='Digite o ID'
                          value={id} onChange={e => setId(e.target.value)}/>
                  </div>

                  <button className='btn btn-principal' onClick={handleSearch}> Procurar </button>
                  
                  <Link to='/' className='btn btn-cancelar ms-3'> Cancelar</Link>
              </>
          )}


          {encontrou === false && (
              <div>
                  <p><strong>FILME NÃO ENCONTRADO</strong> </p>
                  <Link to='/' className='btn btn-cancelar'>VOLTAR</Link>
              </div>
          )}

          {encontrou === true && (
                <>
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

                    <button className='btn btn-principal' onClick={handleDelete}>Apagar</button>

                    <Link to='/' className='btn btn-cancelar ms-3'>Cancelar</Link>
                </>
        )}
        </div>
    </div>
  )
}

export default Delete;