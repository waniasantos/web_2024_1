// nesse import HelloWorld é uma tag jsx, pode ser usado qualquer nome

//import HelloWorld from "./components/01HelloWorld/HelloWorld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Loja from "./components/03Props/Loja";
//import SistemaSolar from "./components/04Children/SistemaSolar";
//import Planeta from "./components/04Children/Planeta";
//import Galaxia from "./components/04Children/Galaxia";
//import ComPai from "./components/05ComPaiFilho/ComPai";

import { SupermercadoV3, BebidaV3, LegumeV3, FrutaV3 } from "./components/aulas/04Children/SupermercadoV3";

function App() {
  return (
    <div>
        <h1>WEBBBE LEBBE DEB DEB</h1>
        <hr />
        <SupermercadoV3 nome = "Geraldão">
          <LegumeV3 nome="Batata" />
          <FrutaV3 nome="Laranja" />
          <BebidaV3 nome="Café" />
        </SupermercadoV3>
    </div>
  )
}

/* function App() {
  return (
    <div>
        <h1>WEBBBE LEBBE DEB DEB</h1>
        <hr />
        //*Exibir todos os filhos que forem passados dentro do container//
        <SistemaSolar>
            <Planeta nome = "Mercúrio" tipo = "Rochoso" ordem = "1"/>
            <hr />
            <Planeta nome = "Vênus" tipo = "Rochoso" ordem = "2"/>
            <hr />
            <Planeta nome = "Terra" tipo = "Rochoso" ordem = "3"/>
            <hr />
            <Planeta nome = "Marte" tipo = "Rochoso" ordem = "4"/>
            <hr />
            <Planeta nome = "Jupiter" tipo = "Gasoso" ordem = "5"/>
            <hr />
            <Planeta nome = "Saturno" tipo = "Gasoso" ordem = "6"/>
            <hr />
            <Planeta nome = "Urano" tipo = "Gasoso" ordem = "7"/>
            <hr />
            <Planeta nome = "Netuno" tipo = "Gasoso" ordem = "8"/>
        </SistemaSolar>
    </div>
  );
} 
*/

export default App

/*
######################### ATIVIDADESSS

import style from './App.module.css'
import FunctionContextA from './components/atividades/atividade02/questao01/FunctionContextA'
import { Avo as Avo1 } from './components/atividades/atividade02/questao02/ComponenteAvo'
import { Avo as Avo2 } from './components/atividades/atividade02/questao03/ComponenteAvo'

function App() {
  return (
    <div className={style.content}>
      <div className={style.q01}>
        <FunctionContextA />
      </div>
      <Avo1 />
      <Avo2 />
    </div>
  )
}

export default App
*/

