import style from './App.module.css'
import FunctionContextA from './components/atividade02/questao01/FunctionContextA'
import { Avo as Avo1 } from './components/atividade02/questao02/ComponenteAvo'
import { Avo as Avo2 } from './components/atividade02/questao03/ComponenteAvo'

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