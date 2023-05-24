// A linha abaixo Inclui o modulo do express no meu codigo ou seja faz uma comunicação externa para passar as funcionabilidades
// O modulo foi carregado e atribuido a uma variavel que neste caso foi a variável "express"
// Obs: é de boa pratica usar variavéis do tipo constantes.
const express = require("express");

// Instanciando uma função do express e atribuindo essa função a variavél "app"
const app = express();

//conexao com bancos de dados

const mysql =require('mysql');

//CONFIGURAÇÃO DA CONEXÃO

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'luisf',
  password : '123456',
  database : 'luisdev'
});

//CONFIGURAÇÕES DA CONEXÃO FIM

//TRATAMENTO DE ERRO DA CONEXAO
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

//FIM TRATAMENTO ERRO DA CONEXAO


//FAZENDO UMA CONSULTA PARA TESTE

connection.query('SELECT * FROM users', function(err, rows, 
  //users é uma tabela que foi criada e inserido valores la no terminal
  fields){
  if( !err){//se a variavel for diferente de truee
console.log("Resultado:", rows);
  }else{
    console.log('Erro ao realizar a busca');
  }
  
})
//FIM DA CONSULTA TESTE

//Fazendo as conexões para as paginas que desejamos abrir

app.get("cadastro", function (req, res) {
  res.sendFile(__dirname+"/srcj/cadastro.html");
});

app.get("/src/cadastro.html", function (req, res) {
  res.sendFile(__dirname+"/src/cadastro.html");
});
app.get("/celulares", function (req, res) {
  res.send(" Departamento celulares");
});

app.get("/moveis", function (req, res) {
  res.send(" Departamento Móveis");
});

app.get("/eletrodomestico", function (req, res) {
  res.send(" Departamento Eletrodomésticos");
});

app.get("/tvvideo", function (req, res) {
  res.send(" Departamento Tv's e Vídeos");
});

app.get("/informatica", function (req, res) {
  res.send(" Departamento Informática");
});

app.get("/nossaslojas", function (req, res) {
  res.send(" Nossas Lojas");
});

app.get("/tenhasualoja", function (req, res) {
  res.send(" Realize seu sonho tenha sua loja");
});

app.get("/regulamentos", function (req, res) {
  res.send(" Departamento Regulamentos");
});

app.get("/acessibilidade", function (req, res) {
  res.send(" Área acessibilidade");
});

//Inicia o servidors
app.listen(8080);

//Para executar o codigo acima CRTL+j
// node index.js
// CTRL + C ( PARA A EXECUÇÃO)

//OBS: COM ESSE METODO VC PRECISA PARAR A EXECUÇÃO E EXECUTAR DE NOVO, TODA VEZ QUE FOR FEITA QULAQUER ALTERAÇÃO.

 

