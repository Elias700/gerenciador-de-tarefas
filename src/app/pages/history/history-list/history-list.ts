import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Plantao } from '../history.models';

@Component({
  selector: 'app-history-list',
  imports: [ MatIconModule ],
  templateUrl: './history-list.html',
  styleUrl: './history-list.css',
})
export class HistoryList {

  plantoes = input.required<Plantao[]>();

  formatarValor(valor: number): string {
    return valor.toLocaleString('pt-BR');
  }

}
