// Implementação concreta para Subtração
export class Subtracao implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 - num2;
    }
  }