// Props são valores passados de pai (Loja) para filho (Produto)
// Funções que recebem argumentos

import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Zenir - Móveis e Eletros</h1>
            <hr />
            <Produto nome="Cama" categoria="Móvel" valor={300}/>
            <hr />
            <Produto nome="Celular" categoria="Tecnologia" valor={1560}/>
            <hr />
            <Produto nome="Mesa" categoria="Móvel" valor={150}/>
            <hr />
            <Produto nome="Cadeira" categoria="Móvel" valor={30}/>
        </div>
    )
}

export default Loja