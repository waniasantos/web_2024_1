const Filho = ({peso,altura}) => {
    
    function resultadoIMC(valor){
        if (valor < 18) return <h3>Abaixo do peso</h3>
        if (valor > 25) return <h3>Acima do peso</h3>
        else return <h3>Peso ideal</h3>

    }

    let valor = peso/(altura*altura)

    return (
        <div>
            <h2>Seu IMC é: {valor.toFixed(2)}</h2>
            <h2>Você está: {resultadoIMC(valor)}</h2>
        </div>
    )
}

export default Filho