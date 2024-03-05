const estilo = {
    backgroundColor: "#FF000F",
    color: "#FFFFFF"
}

export function MeusDados() {
    return (
        <div style={estilo}>
            <h1>Michael Farias de Lima </h1>
            <h1>Wania Kelly dos Santos Oliveira</h1>
            <h2>Engenharia de Software</h2>
            <h3>Universidade Federal do Ceará - Campus Quixadá</h3>
        </div>
    )
}

export const MeusDadosArrowFunctionComRetorno = () => {
    return (
        <div style={estilo}>
            <h1>Michael Farias de Lima </h1>
            <h1>Wania Kelly dos Santos Oliveira</h1>
            <h2>Engenharia de Software</h2>
            <h3>Universidade Federal do Ceará - Campus Quixadá</h3>
        </div>
    )
}

export const MeusDadosArrowFunctionSemRetorno = () => 
    <div style={estilo}>
        <h1>Michael Farias de Lima </h1>
        <h1>Wania Kelly dos Santos Oliveira</h1>
        <h2>Engenharia de Software</h2>
        <h3>Universidade Federal do Ceará - Campus Quixadá</h3>
    </div>


