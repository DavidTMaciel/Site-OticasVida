import React from "react";
import './style.css'

export default function SecaoSobre(){
    return(
        <section className="secao-sobre" id="sobre">
            <div className="limitar-secao">
                <h2>QUEM SOMOS NÓS?</h2>
                <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                <div className="car-secao-sobre">
                    <img src="assets/loja.png" alt="Loja" className="card-image"></img>
                    <div className="card">
                        <h3>NOSSAS FILIAIS</h3>
                        <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                    </div>
                    <div className="card">
                        <h3>ATENDIMENTO FLEXIVEL</h3>
                        <p>Nossa equipe é treinada para te atender </p>                       
                    </div>
                    <img src="assets/atendimento.png" alt="Atendimento" className="card-image"></img>
                </div>
            </div>
        </section>
    )
}