interface Pizza {
  prepare(): void;
  bake(): void;
}

interface SimplePizzaFactory {
  createPizza(type: string): Pizza;
}

class PizzaStore {
  constructor(public factory: SimplePizzaFactory) {
    this.factory = factory;
  }

  orderPizza(type: string) {
    const pizza = this.factory.createPizza(type);
    pizza.prepare();
    pizza.bake();
    return pizza;
  }
}
