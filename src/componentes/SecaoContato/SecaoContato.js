import React from "react";
import './style.css'

export default function SecaoContato(){
    return(
        <section className="secao-contato" id="contato">
            <div className="limitar-secao">
                <h3>FALE CONOSCO</h3>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="container-contato">
                    <div className="card-contato">
                        <h4>Contato</h4>
                        <div className="card-menores">
                            <img src="assets/local.png" title="ícone local" alt="Pino de Localização"></img>
                            <span>Nova Iguaçu</span>
                        </div>
                        <div className="card-menores">
                            <img src="assets/telefone.png" title="Icone Telefone" alt="Telefone"></img>
                            <span>(21)9999-9999</span>
                        </div>
                        <div className="card-menores">
                            <img src="assets/email.png" title="Icone email" alt="email"></img>
                            <span>contato@oticavida.com</span>
                        </div>
                        
                    </div>   
                    <div className="card-contato">
                        <h4>Nossas Redes Sociais</h4>
                        <div className="card-menores">
                            <img src="assets/fb.png" title="Icone Facebook" alt="Facebook"></img>
                            <span>/OticaVida</span>
                        </div>
                        <div className="card-menores">   
                            <img src="assets/ig.png" title="Icone Instagram" alt="Instagram"></img>
                            <span>@oticavidarj</span>
                        </div>
                        <div className="card-menores">
                            <img src="assets/tt.png" title="Icone Twitter" alt="Twitter"></img>
                            <span>@oticavidarj</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}