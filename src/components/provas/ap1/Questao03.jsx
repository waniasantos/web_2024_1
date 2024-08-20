import { useState, useEffect } from 'react';

const Questao03 = () => {
    // usando o hook Estado para criar variáveis de Estado para armazenar oa maior e a menor população
    const [maior, setMaior] = useState('')
    const [menor, setMenor] = useState('')

    // função assincrona que vai buscar os dados na api
    const fetchData = async () => {
        try {
            // requisição para obter os dados dos países europeus (especificamente capital e população)
            const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            const data = await response.json()

            if (data.length > 0) {
                // váriáveis inicializadas com o primeiro valor da lista
                let nome_maior = data[0].capital[0]
                let nome_menor = data[0].capital[0]
                let popu_maior = data[0].population
                let popu_menor = data[0].population

                // percorre todos os paises com objetivo de comparar as populações
                for (let i = 1; i < data.length; i++) {
                    const countryName = data[i].capital[0]
                    const countryPopu = data[i].population

                    // se countryPopu foi maior que popu__maior, 
                    // popu_maior recebe countryPopu
                    // e nome_maior recebe countryName
                    if (countryPopu > popu_maior) {
                        popu_maior = countryPopu
                        nome_maior = countryName
                    }

                    // se countryPopu foi menor que popu__maior, 
                    // popu_maior recebe countryPopu
                    // e nome_maior recebe countryName
                    if (countryPopu < popu_menor) {
                        popu_menor = countryPopu
                        nome_menor = countryName
                    }
                }

                // atualizando o estado com o novo valor, ou seja, 
                // setMaior() recebe uma nova capital que por consequencia tem uma maior população
                // setMenor() recebe uma nova capital que por consequencia tem uma menor população
                setMaior(nome_maior)
                setMenor(nome_menor)
            }
            // imprime uma mensagem de erro
        } catch (error) {
            console.error(error)
        }
    }

    // esse effect garante que a função fetchData seja executada apenas uma vez
    useEffect(
        () => {
            fetchData()
        },
        []
    )

    return (
        <div>
            <li>Maior população: {maior}</li>
            <li>Menor população: {menor}</li>
        </div>
    )
}

export default Questao03
