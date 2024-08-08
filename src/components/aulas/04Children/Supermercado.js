// JSX do App.js
{/* 
<div>
    <h1>WEBBBE LEBBE DEB DEB</h1>
    <hr />
    <Supermercado nome = "Dinal">
    <Legume nome="Batata" />
    <Fruta nome="Laranja" />
    <Bebida nome="Café" />
    </Supermercado>
</div> 
*/}

// IMPRIMINDO OS FILHOS DENTRO DE UMA TAG CONTAINER
const Supermercado = ({ children,nome }) => {
    return (
        <div>
            <h1>Supermercado { nome } </h1>
            {children}
        </div>
    )
}

const Legume = ({ nome }) => {
    return (
        <h3>Legume { nome }</h3>
    )
}

const Fruta = ({ nome }) => {
    return (
        <h3>Fruta { nome }</h3>
    )
}

const Bebida = ({ nome }) => {
    return (
        <h3>Bebida { nome }</h3>
    )
}

export {Supermercado, Legume, Fruta, Bebida}