import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor (private CalculadoraService: CalculadoraService) { }
  
  ngOnInit() {
    this.limpar();
  }

  /**
   * Inicializa todos os operadores para valores padrões 0 e null
   * 
   * @return void
   */
  limpar():void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Retorna o valor concatenado, Trata o separador decimal.
   * 
   * @param string numAtual
   * @param string numConcat
   * @return string
   */
  concatenarNumero(numAtual: string, numConcat: string): string {
    //caso o numero atual seja 0 ou null, reinicia o valor
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    //caso o primeiro digito seja '.', adiciona um 0 antes.
    if(numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //caso '.' digitado e ja tenha um '.'
    if (numConcat === '.' && numAtual.indexOf('.') > -1 ) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Adiciona o número selecionado para o cálculo posteriormente.
   * 
   * @param string numero
   * @return void
   */
  adicionarNumero(numero: string):void {
    if (this.operacao === null) {
      this.numero1 = this.concatenarNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenarNumero(this.numero2, numero);
    }
  }

  calcular(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.CalculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2), 
      this.operacao);
  }

  definirOperacao(operacao: string): void {
    //define uma operação, caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    /*  Caso a operação tenha sido definida e os 2 numeros selecionados
    *   Executa o calculo da operação 
    */
    if(this.numero2 !== null) {
      this.resultado = this.CalculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2), 
        this.operacao)

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Retorna o valor que deverá ser exibido na tela da calculadora.
   * 
   * @return string
   */
  display(): string {
    if (this.resultado !== null) {
      return this.resultado.toString();
    }
    if (this.numero2 !== null) {
      return this.numero1;
    }

    return this.numero1;
  }
}
