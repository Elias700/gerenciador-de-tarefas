import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-stats',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './dashboard-stats.component.html',
  styles: ``,
})
export class DashboardStatsComponent {

  stats = [
    {
      titulo: 'Plantões Realizados',
      valor: '34',
      descricao: 'Este mês: 8',
      variacao: '+12%',
      icone: 'calendar_month',
      tipo: 'success',
    },
    {
      titulo: 'Horas Trabalhadas',
      valor: '412h',
      descricao: 'Este mês: 96h',
      variacao: '+8%',
      icone: 'schedule',
      tipo: 'success',
    },
    {
      titulo: 'Valor a Receber',
      valor: 'R$ 6.480',
      descricao: '3 plantões pendentes',
      variacao: 'Pendente',
      icone: 'payments',
      tipo: 'warning',
    },
    {
      titulo: 'Total Recebido',
      valor: 'R$ 48.200',
      descricao: 'Acumulado 2026',
      variacao: '+24%',
      icone: 'trending_up',
      tipo: 'success',
    },
  ];

}
