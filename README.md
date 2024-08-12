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
- Multiplos componentes
- props.children e React.Children
- Comunicação Pai e Filho (Parent-Child)
- Estados (useState)
- Contextos
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

Primeiro passo: criar uma aplicação em React

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

Basta editar scr/App.js e salvar que já modifica a localhost

- `webpack compiled sucessfully` ==> compila com sucesso a aplicação gera uma bild e ess` bild ele joga pro servidor localhost e disponibiliza a aplicação no browser

html é baseado em tags
tag de bloco pula um espaço irma da

aplicações react pura são SPA -- single page application

index.html --> index.js --> App.js (criar toda a àrvore de componentes react)

- `jsx` é todo o html que é escrito num componente react dentro de um arquivo javascript

- o que é um componente? é uma função que retorna um código jsx, como se fosse um html dentro de umarquivo javascript que depois é renderizado num browser

- o que é package.json? é um arquivo que organiza todas as dependência e scripts relacionados ao meu projeto

### Indicações
- Estudar Next.js, typscript, rust nas ferias
