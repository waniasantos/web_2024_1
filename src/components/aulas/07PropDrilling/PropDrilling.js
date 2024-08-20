import { useEffect } from 'react';

// 1 -- AMBIENTE
const CompA = () => {
    // CompA quer garantir que:
    //      CompB possa usar uma função
    //      -- que -- será definida por CompD
    //      -- através -- de CompC

    let funcaoDeC = null

    function receberRefDeC(ref) {
        funcaoDeC = ref
    }

    return (
        <div>
            <CompB acaoDeD={funcaoDeC} />
            <CompC enviarRefParaA={receberRefDeC} />
        </div>
    )
}

// SUPER Terrorista
const CompB = ({ acaoDeD }) => {
    // recebe a funcao de CompD (via CompA e CompD)
    //      e executará após um click
    return (
        <div>
            <button
                onClick={() => acaoDeD && acaoDeD()}
            >
                Disparar ação em D
            </button>
        </div>
    )
}

// MENSAGEIRO (entre CompA e CompD)
const CompC = ({ enviarRefParaA }) => {

    let funcaoDeD = null

    function receberRefDeD(ref) {
        // refebe a função (de CompD) e envia a função (para CompA)
        funcaoDeD = ref
        enviarRefParaA(funcaoDeD)
    }

    return (
        // passando a props pro meu filho
        <div>
            <CompD enviarRefParaC={receberRefDeD} />
        </div>
    )
}

// GATILHO (quem tem a ação)
const CompD = ({ enviarRefParaC }) => {
    // CompD dispara um alerta (acaoEmD)
    //      -- enviada -- para CompC


    function acaoEmD() {
        alert("Estou em D")
    }

    useEffect(() => {
        enviarRefParaC(acaoEmD);
    }, [enviarRefParaC]);

    return (
        <div>
            Componente D
        </div>
    )
}

export { CompA, CompB, CompC, CompD }