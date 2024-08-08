const estilo = {
    backgroundColor: "#FF000F",
    color: "#FFFFFF"
}


export const MeusDados = (props) => {
    return (
        <div style={estilo}>
            <h2>Nome: {props.nome} </h2>
            <h2>Curso: {props.curso}</h2>
            <h2>Universidade: {props.universidade}</h2>
        </div>
    )
}

export const MeusDadosComDestruturacao = ({nome,curso,universidade}) => {
    return (
        <div style={estilo}>
            <h2>Nome: {nome} </h2>
            <h2>Curso: {curso}</h2>
            <h2>Universidade: {universidade}</h2>
        </div>
    )
}



