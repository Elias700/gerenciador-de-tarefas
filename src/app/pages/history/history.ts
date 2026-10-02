import { Component } from '@angular/core';

import { HistoryFilters } from './history-filters/history-filters';
import { HistoryList } from './history-list/history-list';
import { HistorySummary } from './history-summary/history-summary';
import { Plantao } from './history.models';

@Component({
  selector: 'app-history',
  imports: [
    HistorySummary,
    HistoryFilters,
    HistoryList
  ],
  templateUrl: './history.html',
  styleUrl: './history.css',
})
export class History {

  busca = '';
  filtroStatus = 'todos';
  filtroAno = 'todos';
  filtroMes = 'todos';

  plantaoes: Plantao[] = [
    
  ];

  get existeFiltroAtivo(): boolean {
    return (
      this.busca.trim().length > 0 ||
      this.filtroStatus !== 'todos' ||
      this.filtroAno !== 'todos' ||
      this.filtroMes !== 'todos'
    );
  }

  get plantaoesFiltrados(): Plantao[] {
    const termo = this.busca.trim().toLowerCase();

    return this.plantaoes.filter(p => {
      const [mes, ano] = p.mesFiltro.split('-');

      return (
        (!termo ||
          p.hospital.toLowerCase().includes(termo) ||
          p.especialidade.toLowerCase().includes(termo)) &&
        (this.filtroStatus === 'todos' || p.status === this.filtroStatus) &&
        (this.filtroAno === 'todos' || ano === this.filtroAno) &&
        (this.filtroMes === 'todos' || mes === this.filtroMes)
      );
    });
  }

  get totalRecebido(): number {
    return this.somar('recebido');
  }

  get totalPendente(): number {
    return this.somar('pendente');
  }

  get totalHoras(): number {
    return this.plantaoes.reduce((t, p) => t + Number(p.horario.replace('h', '')), 0);
  }

  private somar(status: string): number {
    return this.plantaoes
      .filter(p => p.status === status)
      .reduce((t, p) => t + p.valor, 0);
  }

}
