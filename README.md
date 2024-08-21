# WEB 2024.1
Professor: Jefferson Carvalho

Repositório dedicado a disciplina de Desenvolvimento de Software para WEB. 

No decorrer do curso, serão desenvolvidos exemplos práticos e atividades utilizando as seguintes tecnologias:

- **Fundamentos**: HTML, CSS e JavaScript.
- **Front-end**: React e Bootstrap.
- **Back-end**: Node.js e Express.js.
- **Banco de dados**: MongoDB, Mongoose.
- **Cloud**: Firebase (Firestore).

### Links

[![youtube](https://img.shields.io/badge/playlist_da_disciplina-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/playlist?list=PL2R4y_yfi1pdtkyzHS2LKLaK2p_S7N1gv&si=-qavYRARmgWOLOvc)

### Conteúdos

- Funções Internas
- Props
    - Hieraquia de props
    - props.children e React.Children
- Comunicação Pai e Filho (Parent-Child)
- Estados (useState)
- Contextos (useContext)
    - Drop Drilling
- Efeitos (useEffect)
- Promessas (then-catch)
- Promessas (async-await)
- Fetch, Axios
- Redux
- Local & Session Storage
- Flexbox
- Bootstrap
- CRUD

### Documentações

 - [React](https://react.dev/)
 - [Create React App](https://create-react-app.dev/)
 - [Next.js](https://nextjs.org/)
 - [Vite](https://vitejs.dev/guide/)
 - [Remix](https://remix.run/docs/en/1.14.3/tutorials/blog)
 - [W3School](https://www.w3schools.com/)
 - [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
 - [HTML Standard](https://html.spec.whatwg.org/)
 - [Web Standard | W3C](https://www.w3.org/standards/)

### Anotações 

Primeiro passo: criar uma aplicação em React (pré requisito: ter node instalado)

```bash
npx create-react-app my_app
cd my_app
npm start
```

`create-react-ap` serve para criar a aplicação (pré requisito isntalar a ultima atualização do node)




PASTAS
- `node_module` (n mexe): bibliotecas que vou precisar para construir a aplicação 
- `public`: imagens que vou usar na aplicação ou outras páginas publicas 
- `src` (onde vou trabalhar): programar em javascript

aplicação web precisa de um servidor pra rodar, estar disponivel em um navegador

Rodar aplicação (porta: localhost:3000):
```bash
npm start
```

- `webpack compiled sucessfully` ==> compila com sucesso a aplicação gera uma bild e ess` bild ele joga pro servidor localhost e disponibiliza a aplicação no browser

- aplicações react pura do CRA são SPA -- single page application

    - index.html --> index.js --> App.js (criar toda a àrvore de componentes react)

- `jsx` é todo o html que é escrito num componente react dentro de um arquivo javascript

- o que é um componente? é uma função que retorna um código jsx, como se fosse um html dentro de um arquivo javascript que depois é renderizado num browser

- o que é package.json? é um arquivo que organiza todas as dependência e scripts relacionados ao projeto

- Estudar Next.js, typscript, rust nas ferias

- **Prop Drilling**: Passar dados através de múltiplos componentes para alcançar um componente filho específico, mesmo que os componentes intermediários não usem esses dados.

- **Context**: Uma solução para evitar o prop drilling, permitindo que dados sejam compartilhados de forma global em uma árvore de componentes e acessados diretamente por qualquer componente filho, independentemente da profundidade.

teste
