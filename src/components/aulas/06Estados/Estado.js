// Formas de lembrar determinadas informações que pertencem a um componente
// que é atualizada e renderizada

// "Toda vez que tenho uma variável que representa um estado de 
// um componente e essa variável ela deve refletir na interface
// usa-se o hook (useState)"

import { useState } from "react";

const Estado = () => {

    // VARIÁVEL DE INSTÂNCIA
    // let contador = 0;

    // VARIÁVEL DE ESTADO (usando hook)
    const [contador, setContador] = useState(0)

    const incrementarContador = () => {
        // contador++
        // console.log(contador)
        setContador(contador => contador + 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button
                onClick={() =>  incrementarContador()}
            >
                Incrementar Contador!
            </button>
        </div>
    )
}

export default Estado