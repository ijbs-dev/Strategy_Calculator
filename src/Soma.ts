// Implementação concreta para Soma
export class Soma implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 + num2;
    }
  }