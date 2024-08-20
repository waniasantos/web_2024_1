const CompA = () => {

    const variavelDeA = "Variável de A"

    return (
        <div>
            <h3>Componente A</h3>
            <CompB variavelDeA={variavelDeA}/>
            <CompC variavelDeA={variavelDeA}/>
            <hr />
        </div>
    )
}

const CompB = ({variavelDeA}) => {
    return (
        <div>
            <h3>Componente B</h3>
            <h3>{variavelDeA}</h3>
            <hr />
        </div>
    )
}

const CompC = ({variavelDeA}) => {

    return (
        <div>
            <h3>Componente C</h3>
            <CompD variavelDeA={variavelDeA}/>
            <hr />
        </div>
    )
}

const CompD = ({variavelDeA}) => {

    return (
        <div>
            <h3>ComponenteD</h3>
            <h3>{variavelDeA}</h3>
            <hr />
        </div>
    )
}

export {CompA, CompB, CompC, CompD}