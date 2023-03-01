import React from "react";
import Topo from "./componentes/Topo/topo.js";
import Conteudo from "./componentes/Conteudo/Conteudo.js";
import Rodape from "./componentes/Rodape/Rodape.js";
import './App.css'

export default function App(){
  return(
    <div>
      <Topo ClassName="limitar-secao"/>
      <Conteudo />
      <Rodape />
    </div>
  )
}