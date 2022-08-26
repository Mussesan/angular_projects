import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

/**
 * Definindo as constantes como propriedades da classe,
 * que serão usdas para definir quais operações a calculadora
 * vai executar
 */
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  /**Método que realiza as operações da calculadora
   * entre dois números do tipo 'number' e um operador do tipo 'string'
   * que são eles: soma, subtração, multiplicação e divisão
   * @param num1 number
   * @param num2 number
   * @param operacao String Operação a ser executada
   * @returns number Resultado da operação escolhida pelo usuário
   */
  calcular (num1: number, num2: number, operacao: string): number {

    let resultado: number; //variável que armazena o resultado da operação

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;

      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;

      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;

      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;

      default:
        resultado = 0;
      break;
    } 
    return resultado;//este é o retorno após operação escolhida pelo usuário
  }


  constructor() { }
}
