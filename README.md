# Kanban Application

Este repositório contém um desafio técnico fullstack para a **BitX**, com o objetivo de avaliar sua capacidade de desenvolvimento fullstack, com
foco em organização, domínio técnico e velocidade de entrega.

## Descrição do Desafio

Você deverá desenvolver uma aplicação de quadro Kanban, composta por:
- Backend utilizando NestJS com Postgres.
- Frontend utilizando ReactJS com Vite.

## Funcionalidades

- Exibir as tarefas separadas por status em colunas estilo Kanban.
- Criar, editar e deletar tarefas
- Alterar o status (pending, in_progress, testing, done) das tarefas.
- Criar e deletar comentários para cada tarefa.
- Filtrar tarefas pelo nome e por status.

## Como rodar o projeto
Antes de começar, certifique-se de ter instalado:

- Node.js (versão 18 ou superior recomendada)
- Yarn ou npm (você pode usar qualquer um)
- PostgreSQL
- Um gerenciador de ambiente, como o dotenv ou .env

Primeiramente, clone o projeto em uma pasta com o comando:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd Kanban-App
```
Entre na pasta Backend com o comando
```
cd backend
```
Instale as dependencias
```
npm install
```
ou

```
yarn install
```

Crie um arquivo .env na raiz do projeto. Exemplo:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/tasks"
```

Configure e rode as migrations do banco de dados
```
npx prisma migrate dev
```

Inicie o servidor
```
npm run start:dev
```

<hr>

Pronto, o backend está configurado, agora saia da pasta backend e entre na frontend com o comando:

```
cd .. && cd frontend
```

Instale as dependencias
```
npm install
```
ou

```
yarn install
```

Crie um arquivo .env na raiz do projeto. Exemplo:
```
VITE_API_URL=http://localhost:3000
```

Inicie o servidor
```
npm run dev
```

Pronto, agora tudo está configurado e pronto para uso

## Autor

<a href="https://github.com/MarceloCChaves">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62251064?s=400&u=b1c8da11d91445ccb2d97b709ccbcd0524885d98&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Marcelo Chaves</b></sub></a> <a href="https://avatars.githubusercontent.com/u/62251064?s=400&u=b1c8da11d91445ccb2d97b709ccbcd0524885d98&v=4" title="Marcelo"></a>

[![Linkedin Badge](https://img.shields.io/badge/-Marcelo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/marcelocchaves/)](https://www.linkedin.com/in/marcelocchaves/) 
[![Gmail Badge](https://img.shields.io/badge/-Marcelochaves20000@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Marcelochaves20000@gmail.com)](mailto:Marcelochaves20000@gmail.com)
