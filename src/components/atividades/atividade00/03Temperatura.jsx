const CelsiusParaFahrenheit = (c) => {
    return c * 1.8 + 32
} 

const FahrenheitParaCelsius = (f) => {
    return (f - 32) / 1.8
} 

const Kelvin = (k) => {
    return {
        celsius: k - 273,
        fahrenheit: (k - 273) * 1.8 + 32
    }
} 

export const UsandoFuncoes = () => {
    let temperatura = 50
    const TemperaturaEmCelsius = FahrenheitParaCelsius(temperatura)
    const TemperaturaEmFahrenheit = CelsiusParaFahrenheit(temperatura)
    const TemperaturaJson = Kelvin(temperatura)
    return (
        <div>
            <h3>Temperatura em Celsius: {TemperaturaEmCelsius}</h3>
            <h3>Temperatura em Fahrenheit: {TemperaturaEmFahrenheit}</h3>
            <h3>Temperatura em Celsius e Fahrenheit: {TemperaturaJson.celsius} e {TemperaturaJson.fahrenheit.toFixed(2)}</h3>

        </div>
    )
}

