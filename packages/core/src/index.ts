import { v4 as uuidv4 } from "uuid";

export class Id {
  private constructor(private readonly _value: string) {}
  static novo(): Id { return new Id(uuidv4()); }
  static de(valor: string): Id { return new Id(valor); }
  toString() { return this._value; }
}

export type Dinheiro = { centavos: number; moeda: "BRL" };

export class Saldo {
  constructor(public atual: Dinheiro) {}
  somar(valor: Dinheiro) {
    this.atual = { ...this.atual, centavos: this.atual.centavos + valor.centavos };
    return this;
  }
}
