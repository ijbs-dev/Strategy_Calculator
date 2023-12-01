
import express from 'express';

const app = express();

app.get('/api/v1', (req, res) => {
  res.send('Hello World!');
});

// GET http://localhost:8000/api/v1
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});


/**
 * 
 * Considerando a solução apresentada no Hipertexto 5, aplique o padrão de projeto Strategy para criar uma 
 * simples calculadora. Os requisitos para avaliar o projeto são:

- implementar uma interface Strategy com o método abstrato execute().

Deve haver três classes concretas que implementam a Strategy para realizar as operações de Soma, Subtração 
e Multiplicação de números inteiros;

- o método execute() deve receber dois números inteiros como parâmetros e retornar o resultado também como 
número inteiro;

- como input do usuário, a aplicação deve receber o primeiro valor, depois o segundo e, por último, a operação 
matemática que deve realizar,

- no final, a aplicação deve definir qual Strategy será usada, com base na operação informada, e imprimir o 
resultado da operação.
 * 
 */

import { Calculadora } from "./Calculadora";
import { Soma } from "./Soma";
import { Subtracao } from "./Subtracao";
import { Multiplicacao } from "./Multiplicacao";

// Exemplo de uso
const calculadora = new Calculadora();

// Recebe valores do usuário (simulando input)
const valor1 = 10;
const valor2 = 5;
const operacao: string = "multiplicacao";

// Define a estratégia com base na operação informada
switch (operacao) {
  case "soma":
    calculadora.setEstrategia(new Soma());
    break;
  case "subtracao":
    calculadora.setEstrategia(new Subtracao());
    break;
  case "multiplicacao":
    calculadora.setEstrategia(new Multiplicacao());
    break;
  default:
    throw new Error("Operação inválida");
}

// Executa a operação e imprime o resultado
const resultado = calculadora.executarOperacao(valor1, valor2);
console.log(`Resultado da ${operacao}: ${resultado}`);
