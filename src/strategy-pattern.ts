interface Strategy {
  doAlgorithm(data: string[]): string[];
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not sure how it'll do it)"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

class ConcreteStrategySort implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

class ConcreteStrategyReverse implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

const context = new Context(new ConcreteStrategySort());
context.doSomeBusinessLogic();

const contextReverse = new Context(new ConcreteStrategyReverse());
contextReverse.doSomeBusinessLogic();
