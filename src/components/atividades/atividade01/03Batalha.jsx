const Hero = ({ nome, img }) => {
    return (
        <div>
            <h2>O herói se chama: { nome }</h2>
            <img src={img} alt={nome}/>
        </div>
    )
}

const Enemy = ({ nome, img }) => {
    return (
        <div>
            <h2>A inimiga se chama: { nome }</h2>
            <img src={img} alt={nome}/>
        </div>
    )
}

const Arena = ({ nome }) => {
    return (
        <div>
            <h1>Na arena {nome} teremos o seguinte duelo</h1>
            <Hero 
            nome="Raionne" 
            img="https://blog.feliway.com/hubfs/Gato%20Ruivo-1.jpg"/>
            <Enemy 
            nome="Panda Louise" 
            img="https://www.patasdacasa.com.br/sites/default/files/styles/webp/public/2023-10/gato-frajola0.jpg.webp?itok=f810U_io"
            />
        </div>
    )
}

const World = (props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export {Hero, Enemy, Arena, World}