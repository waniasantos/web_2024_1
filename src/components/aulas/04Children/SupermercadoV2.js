/* 
const SupermercadoV2 = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado { nome } </h1>
            {
                Children.map(
                    // QUAL ARRAY VOU USAR?
                    children,
                    // COMO VOU CHAMAR CADA ELEMENTO? filho
                    (filho) => {
                        // O QUE VOU FAZER COM CADA ELEMENTO?
                        return (
                            <div style={{backgroundColor:"red"}}>
                                {filho}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}
 */
import { Children } from "react"

// COMO MANIPULAR CADA UM DOS FILHOS? FUNÇÃO CALLBACK
const SupermercadoV2 = ({ children, nome }) => {
    return (
        <div>
            <h1>Supermercado { nome } </h1>
            {
                Children.map(
                    children,
                    filho =>
                        <div style={{backgroundColor:"red"}}>
                            {filho}
                        </div>
                )
            }
        </div>
    )
}

const LegumeV2 = ({ nome }) => {
    return (
        <h3>Legume { nome }</h3>
    )
}

const FrutaV2 = ({ nome }) => {
    return (
        <h3>Fruta { nome }</h3>
    )
}

const BebidaV2 = ({ nome }) => {
    return (
        <h3>Bebida { nome }</h3>
    )
}

export {SupermercadoV2, LegumeV2, FrutaV2, BebidaV2}