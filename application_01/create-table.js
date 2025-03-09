/* 
OBJETIVO: APRENDER FUNDAMENTOS DO BACKEND, CRIAR UMA API QUE SE CONECTA COM DB, CRIAR UMA TABELA E FAZER OPERAÇÕES BÁSICOS (CRUD)

    COMANDOS ATÉ AGORA:
    - npm init -y 
    - npm install dotenv mssql -> (dotenv p/ carregar vars de ambiente) e (mssql é o pacote pra conectar com banco)

    1. CARREGAR AS VAR DE AMB.
    2. FAZER A CONEXÃO COM O DB
*/
console.log("Hello Word!");

// ler o .env e carregar pra memória
require("dotenv").config();
const connString = process.env.CONNECTION_STRING;

// carregar o driver de comunicação com mssqls
const sql = require("mssql");

// função para criar uma nova tabela
async function createTable() {
  try {
    await sql.connect(connString);
  } catch (error) {
    console.log(error);
  }
}
