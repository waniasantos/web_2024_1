// FUNÇÃO ANÔNIMA (ARROW FUNCTIONS): 
// 1: não tem nome (já começa com a definição de parametros) tem seta que aponta pra um corpo

const HelloWorld = () => {
    return (
        <div>
            <h2>Meu primeiro componente REACT e função ARROW!</h2>
        </div>
    )
}

export default HelloWorld;
// export defauld = expostar uma unica função


/* 

1 --- FORMA CLÁSSICA
function HelloWorld() {
    return (
        // código jsx
        <div>
            <h2>Meu primeiro componente REACT!</h2>
        </div>
    )
}

2 --- FUNCIONA MAS É FEIO
const HelloWorld = () => {
    return <div>
            <h2>Meu primeiro componente REACT e função ARROW!</h2>
        </div>   
}


3 --- quando se tem uma função ARROW SEM CORPO E COM UMA UNICA INSTRUÇÃO:
const HelloWorld = () => {
    <div>
        <h2>Meu primeiro componente REACT e função ARROW!</h2>
    </div>
}
*/
