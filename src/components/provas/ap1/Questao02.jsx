import React, { useState } from 'react';

const Questao02 = () => {

    // duas variáveis contantes para armazenar a imagem que será usada durante o código
    const pikachuFrente = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    const pikachuCosta = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

    // usando variaveis de estado para armazenar a solicitada imagem
    const [imagem, setImagem] = useState(pikachuFrente)

    // função anonima com objetivo de trocar as imagens do pikachu
    // quando a imagem é de frente ele entr no if e vira a imagem de costas
    const posicionamento = () => {
        if (imagem === pikachuFrente) {
            setImagem(pikachuCosta)
        } else {
            setImagem(pikachuFrente)
        }
    }

    return (
        <div>
            {/*
            // renderiza a imagem no jsx
            */}
            <img
                src={imagem}
                alt="Pikachu"
                width={300}
            />
            {/*
            // criar um botão que chama a função posicionamento que irá virar a imagem do pikachu sempre que apertado
            */}
            <button onClick={posicionamento}>
                Vire-se, Pikachu!
            </button>
        </div>
    )
}

export default Questao02