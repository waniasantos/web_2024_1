import { useState, useEffect } from "react"

const Efeito = () => {

const [contador, setContador] = useState(0)
const [ehPar,setEhPar] = useState(true)

useEffect(
    () => {
        if (contador % 2 === 0) setEhPar(true)
        else setEhPar(false)
    }
    ,
    [contador]
)

    return (
        <div>
            <h3>Contador: {contador}</h3>
            <h3>É par: {ehPar+""}</h3>
            <button
                onClick={
                    () => {
                        setContador(anterior => anterior+1) 
                    }
                }
            >
                Aumentar
            </button>
        </div>
    )
}

export default Efeito