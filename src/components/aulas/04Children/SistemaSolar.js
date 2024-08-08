//import Planeta from "./Planeta"
// Children permite que manipule e tranforme o jsx recebido dentro de children
import React from "react"

const SistemaSolar = ({children,galaxia}) => {
    return (
        <div>
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />
            {
                React.Children.map(
                    children,
                    ( elemento ) => {
                        return React.cloneElement(elemento,{galaxia})
                    }
                )
            }
        </div>
    )
}
/* const SistemaSolar = ({children,galaxia}) => {
    return (
        <div>
            <h2>Sistema Solar da Galáxia {galaxia}</h2>
            <hr />
            //Exibir todos os filhos que forem passados dentro do container
            {children}
        </div>
    )
} 
*/

export default SistemaSolar