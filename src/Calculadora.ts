// Contexto que utiliza a Strategy
export class Calculadora {
    private estrategia!: OperacaoStrategy;
  
    setEstrategia(estrategia: OperacaoStrategy): void {
      this.estrategia = estrategia;
    }
  
    executarOperacao(num1: number, num2: number): number {
      if (!this.estrategia) {
        throw new Error("Estratégia não definida");
      }
  
      return this.estrategia.execute(num1, num2);
    }
  }