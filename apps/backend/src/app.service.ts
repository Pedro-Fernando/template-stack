import { Injectable } from '@nestjs/common';
import { Saldo } from 'core';

@Injectable()
export class AppService {
  getHello(): string {
    const s = new Saldo({ centavos: 10000, moeda: 'BRL' }).somar({
      centavos: 2500,
      moeda: 'BRL',
    });
    return `Saldo atual: R$ ${(s.atual.centavos / 100).toFixed(2)}`;
  }
}
