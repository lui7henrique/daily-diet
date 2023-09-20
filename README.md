# 🍏 Daily Diet API 

A Daily Diet API é uma aplicação desenvolvida como parte do Desafio 02 do módulo "Criando APIs RESTful com Node.js".

## 🚀 Sobre 

Neste desafio, desenvolvemos uma API para controle de dieta diária, a Daily Diet API.

## 📋 Regras da aplicação 

- Deve ser possível criar um usuário 
- Deve ser possível identificar o usuário entre as requisições 
- Deve ser possível registrar uma refeição feita, com as seguintes informações:
  - As refeições devem ser relacionadas a um usuário 
  - Nome 
  - Descrição 
  - Data e Hora 
  - Está dentro ou não da dieta 
- Deve ser possível editar uma refeição, podendo alterar todos os dados acima 
- Deve ser possível apagar uma refeição 
- Deve ser possível listar todas as refeições de um usuário 
- Deve ser possível visualizar uma única refeição 
- Deve ser possível recuperar as métricas de um usuário 
  - Quantidade total de refeições registradas 
  - Quantidade total de refeições dentro da dieta 
  - Quantidade total de refeições fora da dieta
  - Melhor sequência de refeições dentro da dieta 
- O usuário só pode visualizar, editar e apagar as refeições que ele criou

## 🚀 Como executar:

1. Clone o repositório:

   ```shell
   $ git clone https://github.com/seu-usuario/daily-diet-api.git
   ```

2. Acesse a pasta do projeto:

   ```shell
   $ cd daily-diet-api
   ```

3. Instale as dependências:

   ```shell
   $ npm install
   ```

4. Configure as variáveis de ambiente em um arquivo `.env`:

   ```shell
   # Exemplo de variáveis de ambiente
   DATABASE_URL='sua-url-de-banco-de-dados'
   SECRET_KEY='sua-chave-secreta'
   ```

5. Execute as migrações do banco de dados:

   ```shell
   $ npx knex migrate:latest
   ```

6. Execute as sementes do banco de dados:

   ```shell
   $ npx knex seed:run
   ```

7. Inicie o servidor:

   ```shell
   $ npm start
   ```

Agora, a Daily Diet API está em execução e pronta para uso.

##  👨‍💻 Autor

Seu Nome - Desenvolvedor de Software

[Linkedin](https://www.linkedin.com/in/seu-nome/) | [E-mail](mailto:seu-email@example.com)

---

Este projeto foi desenvolvido como parte do Desafio 02 do curso "Criando APIs RESTful com Node.js" da Rocketseat. 🚀📚
