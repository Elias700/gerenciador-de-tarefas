import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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
    // FormsModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatIconModule,
    // MatOptionModule,
    // MatSelectModule
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
    // ...os seus dados mockados continuam aqui, sem mudança
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

  // busca = '';

  // filtroStatus = 'todos';
  // filtroMes = 'todos';
  // filtroAno = 'todos';

  // statusOpcoes = [
  //   { valor: 'todos', nome: 'Todos' },
  //   { valor: 'recebido', nome: 'Recebido' },
  //   { valor: 'pendente', nome: 'Pendente' },
  // ];

  // anos = [
  //   { valor: 'todos', nome: 'Todos os anos' },
  //   { valor: '2025', nome: '2025' },
  //   { valor: '2026', nome: '2026' },
  // ];

  // // o "valor" precisa ser igual ao início do mesFiltro dos plantões
  // meses = [
  //   { valor: 'todos', nome: 'Todos os meses' },
  //   { valor: 'janeiro', nome: 'Janeiro' },
  //   { valor: 'fevereiro', nome: 'Fevereiro' },
  //   { valor: 'março', nome: 'Março' },
  //   { valor: 'abril', nome: 'Abril' },
  //   { valor: 'maio', nome: 'Maio' },
  //   { valor: 'junho', nome: 'Junho' },
  //   { valor: 'julho', nome: 'Julho' },
  //   { valor: 'agosto', nome: 'Agosto' },
  //   { valor: 'setembro', nome: 'Setembro' },
  //   { valor: 'outubro', nome: 'Outubro' },
  //   { valor: 'novembro', nome: 'Novembro' },
  //   { valor: 'dezembro', nome: 'Dezembro' },
  // ];

  // plantaoes = [
  //   // JUNHO
  //   {
  //     data: '28',
  //     mes: 'Jun',
  //     mesFiltro: 'junho-2026',
  //     hospital: 'Hospital das Clínicas',
  //     especialidade: 'Clínica Geral',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Dom, 28 Jun 2026',
  //     valor: 850,
  //     status: 'recebido'
  //   },
  //   {
  //     data: '21',
  //     mes: 'Jun',
  //     mesFiltro: 'junho-2026',
  //     hospital: 'UPA Centro',
  //     especialidade: 'Pronto-Socorro',
  //     tipo: 'Noturno',
  //     horario: '12h',
  //     dia: 'Dom, 21 Jun 2026',
  //     valor: 950,
  //     status: 'pendente'
  //   },
  //   {
  //     data: '12',
  //     mes: 'Jun',
  //     mesFiltro: 'junho-2026',
  //     hospital: 'Santa Casa',
  //     especialidade: 'Pediatria',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Sex, 12 Jun 2026',
  //     valor: 700,
  //     status: 'recebido'
  //   },

  //   // AGOSTO
  //   {
  //     data: '25',
  //     mes: 'Ago',
  //     mesFiltro: 'agosto-2026',
  //     hospital: 'Hospital Regional',
  //     especialidade: 'UTI',
  //     tipo: 'Integral',
  //     horario: '24h',
  //     dia: 'Ter, 25 Ago 2026',
  //     valor: 1900,
  //     status: 'pendente'
  //   },
  //   {
  //     data: '16',
  //     mes: 'Ago',
  //     mesFiltro: 'agosto-2026',
  //     hospital: 'UPA Norte',
  //     especialidade: 'Clínica Geral',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Dom, 16 Ago 2026',
  //     valor: 780,
  //     status: 'recebido'
  //   },

  //   // SETEMBRO
  //   {
  //     data: '20',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'Hospital das Clínicas',
  //     especialidade: 'Pronto-Socorro',
  //     tipo: 'Noturno',
  //     horario: '12h',
  //     dia: 'Dom, 20 Set 2026',
  //     valor: 980,
  //     status: 'recebido'
  //   },
  //   {
  //     data: '18',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'UPA Centro',
  //     especialidade: 'Clínica Geral',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Sex, 18 Set 2026',
  //     valor: 780,
  //     status: 'recebido'
  //   },
  //   {
  //     data: '14',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'Hospital São Lucas',
  //     especialidade: 'UTI',
  //     tipo: 'Integral',
  //     horario: '24h',
  //     dia: 'Seg, 14 Set 2026',
  //     valor: 1960,
  //     status: 'pendente'
  //   },
  //   {
  //     data: '10',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'UPA Norte',
  //     especialidade: 'Clínica Geral',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Qui, 10 Set 2026',
  //     valor: 780,
  //     status: 'recebido'
  //   },
  //   {
  //     data: '05',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'Hospital das Clínicas',
  //     especialidade: 'Cirurgia',
  //     tipo: 'Noturno',
  //     horario: '12h',
  //     dia: 'Sáb, 05 Set 2026',
  //     valor: 1200,
  //     status: 'recebido'
  //   },
  //   {
  //     data: '01',
  //     mes: 'Set',
  //     mesFiltro: 'setembro-2026',
  //     hospital: 'Santa Casa',
  //     especialidade: 'Pediatria',
  //     tipo: 'Diurno',
  //     horario: '12h',
  //     dia: 'Ter, 01 Set 2026',
  //     valor: 680,
  //     status: 'recebido'
  //   }
  // ];

  // get existeFiltroAtivo(): boolean {
  //   return (
  //     this.busca.trim().length > 0 ||
  //     this.filtroStatus !== 'todos' ||
  //     this.filtroAno !== 'todos' ||
  //     this.filtroMes !== 'todos'
  //   );
  // }

  // get plantaoesFiltrados() {
  //   const termo = this.busca.trim().toLowerCase();

  //   return this.plantaoes.filter(plantao => {
  //     // 'junho-2026' -> mes = 'junho', ano = '2026'
  //     const [mes, ano] = plantao.mesFiltro.split('-');

  //     const correspondeBusca =
  //       !termo ||
  //       plantao.hospital.toLowerCase().includes(termo) ||
  //       plantao.especialidade.toLowerCase().includes(termo);

  //     const correspondeStatus =
  //       this.filtroStatus === 'todos' || plantao.status === this.filtroStatus;

  //     const correspondeAno =
  //       this.filtroAno === 'todos' || ano === this.filtroAno;

  //     const correspondeMes =
  //       this.filtroMes === 'todos' || mes === this.filtroMes;

  //     return correspondeBusca && correspondeStatus && correspondeAno && correspondeMes;
  //   });
  // }

  // selecionarStatus(status: string): void {
  //   this.filtroStatus = status;
  // }

  // limparFiltros(): void {
  //   this.busca = '';
  //   this.filtroStatus = 'todos';
  //   this.filtroAno = 'todos';
  //   this.filtroMes = 'todos';
  // }

  // selecionarMes(mes: string): void {
  //   this.filtroMes = mes;
  // }

  // get totalRecebido(): number {
  //   return this.plantaoes
  //     .filter(plantao => plantao.status === 'recebido')
  //     .reduce((total, plantao) => total + plantao.valor, 0);
  // }

  // get totalPendente(): number {
  //   return this.plantaoes
  //     .filter(plantao => plantao.status === 'pendente')
  //     .reduce((total, plantao) => total + plantao.valor, 0);
  // }

  // get totalHoras(): number {
  //   return this.plantaoes.reduce((total, plantao) => {
  //     return total + this.converterHoras(plantao.horario);
  //   }, 0);
  // }

  // private converterHoras(horario: string): number {
  //   return Number(horario.replace('h', ''));
  // }

  // formatarValor(valor: number): string {
  //   return valor.toLocaleString('pt-BR', {
  //     minimumFractionDigits: 0,
  //     maximumFractionDigits: 2
  //   });
  // }

}
