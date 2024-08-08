// FORMA CLÁSSICA
// como representa um componente React, usar letra maiúscula
/* 
function HelloWorld() {
    return (
        // código jsx
        <div>
            <h2>Meu primeiro componente REACT!</h2>
        </div>
    )
}
*/


// FUNÇÃO ANÔNIMA (ARROW FUNCTIONS): não tem nome, já começa com a definição de parametros, tem seta que aponta pra um corpo
// dar preferencia
// diferença conts, var e let
// const: constante, uma vez inicializada não pode mudar o valor dela
// let e var pode mudar, porém a diferença é de escopo:
// var é global
// let é local
const HelloWorld = () => {
    return (
        <div>
            <h2>Meu primeiro componente REACT e função ARROW!</h2>
        </div>
    )
}
/*

//FUNCIONA MAS É FEIO
const HelloWorld = () => {
    return <div>
            <h2>Meu primeiro componente REACT e função ARROW!</h2>
        </div>
    
}
*/

// quando se tem uma função ARROW SEM CORPO E COM UMA UNICA INSTRUÇÃO:

/* 
const HelloWorld = () => {
    <div>
        <h2>Meu primeiro componente REACT e função ARROW!</h2>
    </div>
}
*/
export default HelloWorld