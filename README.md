# simples-salao-api

## Descrição
API REST feita com base na seguinte descrição de tema: O Simples Salão é um aplicativo intuitivo e eficiente projetado para simplificar e aprimorar a gestão de salões de estética e profissionais do setor da beleza, além de fazer a conexão com o cliente final. 

API é consumida pelo frontend projetado, que pode ser acessado [aqui](https://github.com/joaby-oliveira/simples-salao)
## Tecnologias utilizadas (principais)

- Typescript
- NodeJs
- Express
- Prisma
- Jest
- Swagger
- Docker

## Rodando localmente

Clone o projeto

bash
  git clone https://github.com/VictorNAGomes/simples-salao-api


Entre no diretório do projeto

bash
  cd simples-salao-api


Instale as dependências

bash
  npm install


Para rodar o servidor em teste, pode ser utilizado o SQLite como banco para facilitar. Substitua em /prisma/schema.prisma para o seguinte datasource:

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}


Execute as migrations estabelecidas pelo projeto:
bash
npx prisma migrate dev


Finalmente, para executar:
bash
npm run start:dev
