# React Typescript Boilerplate

Boilerplate feito para acelerar a inicialização de um projeto feito em ReactJS + Typescript + Redux com toda a estrutura de pastas padrão e com ambiente de teste e documentação configurados.

## Projeto

Certifique-se que a versão do seu create-react-app é >=3.3.0

`create-react-app --version`

Caso não seja utilize o comando abaixo para atualiza-lo

`npm i -g create-react-app`

Para instalar como um template do Create React App

`create-react-app <nome_do_projeto> --template typescript-ea-advanced`

---

Instalar dependencias

`$ yarn`

Iniciar o projeto

`$ yarn start`

---

## Testes

Rodar testes automatizados

`$ yarn test`

Verificar o quanto a aplicação foi testada

`$ yarn coverage`

---

## Documentação de Componentes

Iniciar a documentação

`$ yarn storybook`

## Linters

Para funcionar os linters de Javascript(ESLint) e de CSS(Stylelint) necessário instalar as extenções do vscode:

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

E para ativar as formações na hora de salvar no vscode CTRL + SHIFT + P para abrir a palleta de comandos e escrever settings.json após dar um enter adicione essas duas configurações no arquivo:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  }
}
```
