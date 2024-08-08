const MeusDadosProps = (props) => {
    return (
        <div>
            <h2>Nome: {props.nome}</h2>
            <h2>Curso: {props.curso}</h2>
            <h2>Universidade: {props.universidade}</h2>
        </div>
    )
}

const MeusDadosPropsDesestruturado = ({nome, curso, universidade}) => {
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <h2>Curso: {curso}</h2>
            <h2>Universidade: {universidade}</h2>
        </div>
    )
}

export {MeusDadosProps,MeusDadosPropsDesestruturado} 