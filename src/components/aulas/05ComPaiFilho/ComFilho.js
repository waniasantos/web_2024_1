const ComFilho = ({ mensagem, enviarMensagemParaOPai }) => {

    return (
        <div>
            <h2>Mensagem do Pai: {mensagem}</h2>
            <button
                onClick={
                    () => {
                        // a chamada dessa propriedade está apontando para uma função
                        // implementada em outro componente
                        enviarMensagemParaOPai("Oi, Pai. Tudo bom?")
                    }
                }
            >
                Enviar mensagem para o Pai!
            </button>
        </div>
    )
}

export default ComFilho