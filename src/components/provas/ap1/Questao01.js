import { useState, useEffect } from 'react';

const Questao01A = () => { 
    const lista = [
        { a: 10, b: 3, c: 7 },
        { a: 5, b: -3, c: 9 },
        { a: 1, b: 9, c: 40 }
    ];

    return (
        <div>
            {/*
            // passando lista como props para o componente filho 
            */}
            <Questao1B lista={lista} />
        </div>
    );
}

function Questao01B({ lista }) {

    // criando variavel de Estado para armazenar os maiores elementos encontrados
    const [maioresElementos, setMaioresElementos] = useState([]);

    // quando a lista muda, o hook Efeito irá calcular os maiores elementos 
    useEffect(() => {

        // array para armazenar os maiores elementos
        const novosMaioresElementos = [];

        // percorrer todo os objetos da lista
        for (let i = 0; i < lista.length; i++) {
            const item = lista[i];
            // compara e encontra o maior elemento do objeto atual
            const maiorElemento = Math.max(item.a, item.b, item.c);
            // adiciona o maior elemento ao novo array
            novosMaioresElementos.push(maiorElemento);
        }
        // atualiza o estado com os novos valores
        setMaioresElementos(novosMaioresElementos);
        }
        , 
        [lista]
    );


    // cria um array de elementos de lista para renderizar
    const listaElementos = [];
    for (let i = 0; i < maioresElementos.length; i++) {
        listaElementos.push(
            <li>{maioresElementos[i]}</li>
        );
    }

    return (
        <div>
            {/*
            // finalmente renderiza os elementos do array
            */}
            {listaElementos}
        </div>
    );
}

export default Questao01A;
