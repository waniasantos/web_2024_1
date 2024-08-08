const PlacaMae = ({nome, valor}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {valor}</h3>
        </div>
    )
}

const Memoria = ({nome, valor}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {valor}</h3>
        </div>
    )
}

const PlacaDeVideo = ({nome, valor}) => {
    return (
        <div>
            <h3>Nome: {nome}</h3>
            <h3>Preço: {valor}</h3>
        </div>
    )
}

export { PlacaMae, Memoria, PlacaDeVideo }