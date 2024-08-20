const FuncoesInternas = () => {
    
    let num1 = 15
    let num2 = 10

    // posso criar funções internas a outras funções
    // também pode criar funções ARROW aqui dentro
    function somar(x,y) {
        return x + y
    }

    const subtrair = (x,y) => {
        return x - y 
    }

    function multiplicar(x,y) {
        return x * y
    }

    function dividir(x,y) {
        return x / y
    }

    return (
        //o que tiver dentro de {} ele vai interpretar como código javascript
        <div>
            <h1>CALCULADORA</h1>
            <h3>O resultado da soma é: {somar(num1,num2)}</h3>
            <h3>O resultado da subtração é: {subtrair(num1,num2)}</h3>
            <h3>O resultado da multiplicação é: {multiplicar(num1,num2)}</h3>
            <h3>O resultado da divisão é: {dividir(num1,num2).toFixed(2)}</h3>
        </div>
    )
}

export default FuncoesInternas