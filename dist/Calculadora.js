"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
// Contexto que utiliza a Strategy
class Calculadora {
    setEstrategia(estrategia) {
        this.estrategia = estrategia;
    }
    executarOperacao(num1, num2) {
        if (!this.estrategia) {
            throw new Error("Estratégia não definida");
        }
        return this.estrategia.execute(num1, num2);
    }
}
exports.Calculadora = Calculadora;
