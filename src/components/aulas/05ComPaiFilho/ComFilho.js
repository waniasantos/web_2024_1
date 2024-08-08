// Pai mandando mensagem para o Filho
/* const ComFilho = ({props}) => {
    
    let {mensagem} = props

    return (
        <div>
            <h2>Mensagem do Pai: {mensagem}</h2>
        </div>
    )
} */

// Filho mandando mensagem para o Pai
const ComFilho = (props) => {
    
    let {mensagem} = props

    return (
        <div>
            <h2>Mensagem do Pai: {mensagem}</h2>
            <button>
                Enviar mensagem para o Pai
            </button>
        </div>
    )
}

export default ComFilho