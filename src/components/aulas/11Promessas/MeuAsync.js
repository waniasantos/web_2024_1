import { useState, useEffect } from "react"

const minhaPromessa = new Promise(
    (resolve, rejected) => {
        // computação de x segundos..
        setTimeout(
            () => {
                //console.log("Fui executado")
                const meuNumero = Math.floor(Math.random() * 10) + 1
                if (meuNumero % 2 === 0) resolve("Deu certo! Seu número é " + meuNumero)
                else rejected("Deu errado. Seu número é: " + meuNumero)
            }
            ,
            5000
        ) // setTimeout
    } // Promisse
)

const ComponentePromessa = () => {

    const [resultado, setResultado] = useState("")

    async function apiGetPromessa(){
        try{
            const res = await minhaPromessa
            setResultado(res)
        }catch(error){
            setResultado(error)
        }

    }

    useEffect(
        () => {
            apiGetPromessa()
        }
        ,
        []
    )

    return (
        <div>
            <h3>PROMESSA Async!</h3>
            <h3>Resultado: {resultado}</h3>
        </div>
    )

}

export default ComponentePromessa