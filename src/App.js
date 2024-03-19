import Pai from "./components/atividade01/01Pai";
import * as PC from "./components/atividade01/02MeuPC";
import * as Batalha from "./components/atividade01/03Batalha";

function App() {
  return (
    <div>
        <Pai />
        <hr />
        <h1>Meu PC</h1>
        <PC.PlacaMae nome={"ATX"} valor = {400}/>
        <PC.Memoria nome={"HyperX Fury"} valor = {350}/>
        <PC.PlacaDeVideo nome={"NVDIA"} valor = {700}/>
        <hr />
        <Batalha.World>
          <Batalha.Arena nome= "Romeirão" />
          <Batalha.Arena nome= "Moraisão" />
        </Batalha.World>

    </div>
  )
}

export default App;
