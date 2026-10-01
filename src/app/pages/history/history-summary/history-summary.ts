import { Component, input } from '@angular/core';

@Component({
  selector: 'app-history-summary',
  imports: [],
  templateUrl: './history-summary.html',
  styleUrl: './history-summary.css',
})
export class HistorySummary {

  totalRecebido = input.required<number>();
  totalPendente = input.required<number>();
  totalHoras = input.required<number>();

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR');
  }

}
