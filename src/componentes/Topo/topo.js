import React from 'react';
import './style.css'


export default function Topo(){
    return(
        <header className='limitar-secao '>
           <div className='topo'>
            <img src='assets/logo.png' alt='logo'></img>
            <nav>
                <ul>
                    <a href='#produtos'>Produto</a>
                    <a href='#sobre'>Sobre</a>
                    <a href='#contato'>Contato</a>
                </ul>
            </nav>
           </div> 
        </header>
    )
}