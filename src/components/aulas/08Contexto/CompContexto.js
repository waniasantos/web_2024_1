import { useContext } from "react"
import { VariavelDeA } from "./MeuContexto"

const CompA = () => {

    return (
        <div>
            <h3>Componente A</h3>
            <VariavelDeA.Provider value={{nome: "Wania", turma: "Web"}}>
                <CompB />
                <CompC />
            </VariavelDeA.Provider>
            <hr />
        </div>
    )
}

const CompB = () => {

    const {nome} = useContext(VariavelDeA)

    return (
        <div>
            <h3>Componente B</h3>
            <h3>{nome}</h3>
            <hr />
        </div>
    )
}

const CompC = () => {

    return (
        <div>
            <h3>Componente C</h3>
            <CompD />
            <hr />
        </div>
    )
}

const CompD = () => {

    const contexto = useContext(VariavelDeA)

    return (
        <div>
            <h3>Componente D</h3>
            <h3>{contexto.turma}</h3>
            <hr />
        </div>
    )
}

export {CompA, CompB, CompC, CompD}