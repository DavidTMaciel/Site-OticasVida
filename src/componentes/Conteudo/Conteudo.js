import React from "react";
import SecaoCapa from "../SessaoCapa/SecaoCapa"
import SecaoProdutos from "../SecaoProdutos/SecaoProdutos";
import SecaoSobre from "../SecaoSobre/SecaoSobre";
import SecaoContato from "../SecaoContato/SecaoContato";

export default function Conteudo(){
    return(
        <section className="conteudo_principal">
            <div>
                <SecaoCapa />
                <SecaoProdutos />
                <SecaoSobre />
                <SecaoContato />
            </div>

        </section>
    )
}