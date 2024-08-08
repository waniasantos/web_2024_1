import { Children, cloneElement } from "react"

// COMO MUDAR UM ELEMENTO ADICIONANDO PROPRIEDADES, SENDO OS FILHOS SÃO IMUTÁVEIS? 
// VOU PRECISAR CLONAR
const SupermercadoV3 = ({ children,nome }) => {
    return (
        <div>
            <h1>Supermercado { nome } </h1>
            {
                Children.map(
                    children,
                    filho =>
                        cloneElement(filho,{supermercado:nome})
                )
            }
        </div>
    )
}

const LegumeV3 = ({ nome, supermercado }) => {
    return (
        <h3>Legume { nome } do Supermercado { supermercado }</h3>
    )
}

const FrutaV3 = ({ nome }) => {
    return (
        <h3>Fruta { nome }</h3>
    )
}

const BebidaV3 = ({ nome }) => {
    return (
        <h3>Bebida { nome }</h3>
    )
}

export {SupermercadoV3, LegumeV3, FrutaV3, BebidaV3}