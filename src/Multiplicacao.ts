// Implementação concreta para Multiplicação
export class Multiplicacao implements OperacaoStrategy {
    execute(num1: number, num2: number): number {
      return num1 * num2;
    }
  }