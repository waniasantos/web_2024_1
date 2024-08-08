import React from "react"

function MeusDados () {
    return (
        <div>
            <h1>Nome: Wania Santos</h1>
            <h1>Curso: Relações Internacionais</h1>
            <h1>Universidade: Universidade Federal do Ceará</h1>
        </div>
    )
}

const MeusDadosV1 = () => {
    return (
        <div>
            <h1>Nome: Wania Santos</h1>
            <h1>Curso: Relações Internacionais</h1>
            <h1>Universidade: Universidade Federal do Ceará</h1>
        </div>
    )
}

const MeusDadosV2 = () => 
    <div>
        <h1>Nome: Wania Santos</h1>
        <h1>Curso: Relações Internacionais</h1>
        <h1>Universidade: Universidade Federal do Ceará</h1>
    </div>

class MeusDadosV3 extends React.Component { 
    // sobrescrever o métofo render
    render() {
        return (
            <div>
                <h1>Nome: Wania Santos</h1>
                <h1>Curso: Relações Internacionais</h1>
                <h1>Universidade: Universidade Federal do Ceará</h1>
            </div>
        )
    }
}

export {MeusDados,MeusDadosV1,MeusDadosV2,MeusDadosV3}