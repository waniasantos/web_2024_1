// Props são valores passados de pai para filho

import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Supermercado Quixadá</h1>
            <hr />
            <Produto nome="Cama" categoria="Móvel" valor={150}/>
            <hr />
            <Produto nome="Celular" categoria="Tecnologia" valor={1230}/>
            <hr />
            <Produto nome="Mesa" categoria="Móvel" valor={60}/>
            <hr />
            <Produto nome="Cadeira" categoria="Móvel" valor={80}/>
        </div>
    )
}

export default Loja