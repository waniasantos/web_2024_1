const Temperatura = () => {

    let c = 35
    let f = 75
    let k = 0
    
    const celsiusFahrenheit = (celsius) => celsius * 1.8 + 32

    const fahrenheitCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8

    // tratar o objeto antes de tentar renderizar ele pois JSON não é válido como filho React
    function kelvin(kelvin) {
        let celsius = kelvin - 273
        let fahrenheit = (kelvin - 273) * 1.8 + 32
        return {celsius,fahrenheit}

    }

    let {celsius, fahrenheit} = kelvin(k)


    return (
        <div>
            <h3>Temperatura de {c} Celsius para Fahrenheit: {celsiusFahrenheit(c)}</h3>
            <h3>Temperatura de {f} Fahrenheit para Celsius: {fahrenheitCelsius(f).toFixed(2)}</h3>
            <h3>Temperatura de {k} Kelvin para Celsius e Fahrenheit: {celsius} e {fahrenheit.toFixed(2)}</h3>
            <h3>Depuração: {JSON.stringify(kelvin(k))}</h3>
        </div>
    )
}

export default Temperatura