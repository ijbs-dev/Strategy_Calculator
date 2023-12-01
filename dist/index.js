"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/v1', (req, res) => {
    res.send('Hello World!');
});
// GET http://localhost:3000/api/v1
app.listen(3000, () => {
    console.log('Server listening on port 3000');
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
const Calculadora_1 = require("./Calculadora");
const Soma_1 = require("./Soma");
const Subtracao_1 = require("./Subtracao");
const Multiplicacao_1 = require("./Multiplicacao");
// Exemplo de uso
const calculadora = new Calculadora_1.Calculadora();
// Recebe valores do usuário (simulando input)
const valor1 = 10;
const valor2 = 5;
const operacao = "soma";
// Define a estratégia com base na operação informada
switch (operacao) {
    case "soma":
        calculadora.setEstrategia(new Soma_1.Soma());
        break;
    case "subtracao":
        calculadora.setEstrategia(new Subtracao_1.Subtracao());
        break;
    case "multiplicacao":
        calculadora.setEstrategia(new Multiplicacao_1.Multiplicacao());
        break;
    default:
        throw new Error("Operação inválida");
}
// Executa a operação e imprime o resultado
const resultado = calculadora.executarOperacao(valor1, valor2);
console.log(`Resultado da ${operacao}: ${resultado}`);
