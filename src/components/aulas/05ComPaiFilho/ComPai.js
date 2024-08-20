// Passei uma função, para chamar uma função para chamar o Pai
import ComFilho from "./ComFilho"

const ComPai = () => {

    // Além de passar propriedade simples, também se passa funções para o Filho
    function receberMensagemDoFilho(mensagem) {
        alert("Recebi do meu filho: " + mensagem)
    }

    return (
        <div>
            <ComFilho mensagem="Oi, Filho =)"
                //
                enviarMensagemParaOPai={receberMensagemDoFilho} />
        </div>
    )
}

export default ComPai