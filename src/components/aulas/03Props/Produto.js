// desestruturar já no recebimento dos parametros
const Produto = ({nome, categoria, valor}) => {
    
    // estou passando um objeto JSON pro componente jsx
    // o que é um objeto JSON? obedece o padrão chave, valor
    
    // chaves podem ser outros objetos JSON
    // let objJSON = {nome:"Wania", idade:"25", curso:"Relações Internacionais", notas: {nota1:5,nota2:6}} 

    // COM DESESTRUTURAÇÃO
    // const {nome, categoria, valor} = props
    return (
        <div>
            {/*} // jsx não tem comentário, ele se utiliza do javascript
            <h1>{objJSON.notas.nota2}</h1>
            {*/}
            <h3>Nome: {nome}</h3>
            <h3>Categoria: {categoria}</h3>
            <h3>Preço: R$ {valor}</h3>
        </div>
    )

    /*     
    //SEM DESESTRUTURAÇÃO
    const {nome, categoria, valor} = props
    return (
        <div>
            <h3>Nome: {props.nome}</h3>
            <h3>Categoria: {props.categoria}</h3>
            <h3>Preço: {props.valor}</h3>
        </div>
        )
     */

    
}

export default Produto