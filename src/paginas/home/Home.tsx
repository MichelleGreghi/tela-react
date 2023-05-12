import React from 'react'
import './Home.css'

function Home(){
    return(
    <> 
        <img className='logo' src="../../../src/assets/google.jpg" alt="Imagem Google" />
        <form >
            <input className='formulario' type="text" id='pesquisa' name='pesquisa' />
        <button className='botao1'>Pesquisa Google</button>    
        <button className='botao2'>Estou com sorte</button> 
        </form>
    </>
    )
}

export default Home;