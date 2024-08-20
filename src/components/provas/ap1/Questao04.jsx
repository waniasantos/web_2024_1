import { useState, useEffect } from 'react';

// essa função simula uma chamada a uma API, retornando um conjunto de dados de países
const PromiseData = () => {
    // retorna uma promessa (eventual conclusão ou falha)
    return new Promise(
        (resolve) => {
            // atraso de 1 segundo sendo simulado
            setTimeout(
                () => {
                    // passa os dados
                    resolve([
                        { "capital": ["Dublin"], "population": 4994724 },
                        { "capital": ["Nicosia"], "population": 1207361 },
                        { "capital": ["Madrid"], "population": 47351567 }])
                }
                ,
                1000 // valor do timeout
            )
        }
    )
}

const Questao04 = () => {
    // usando o hook Estado para criar variáveis de Estado para armazenar oa maior e a menor população
    const [maior, setMaior] = useState('')
    const [menor, setMenor] = useState('')

    // função assincrona que vai buscar os dados na api
    const fetchData = async () => {
        try {
            // aguarda a resolução da PromiseData para obter os dados
            const data = await PromiseData()

            if (data.length > 0) {
                // váriáveis inicializadas com o primeiro valor da lista
                let nome_maior = data[0].capital[0]
                let nome_menor = data[0].capital[0]
                let popu_maior = data[0].population
                let popu_menor = data[0].population

                // percorrer todos os paises com objetivo de comparar as populações
                for (let i = 1; i < data.length; i++) {
                    const countryName = data[i].capital[0]
                    const countryPopu = data[i].population

                    if (countryPopu > popu_maior) {
                        popu_maior = countryPopu
                        nome_maior = countryName
                    }

                    if (countryPopu < popu_menor) {
                        popu_menor = countryPopu
                        nome_menor = countryName
                    }
                }

                // atualizando o estado com o novo valor, ou seja, uma nova capital com uma população maior
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

export default Questao04
