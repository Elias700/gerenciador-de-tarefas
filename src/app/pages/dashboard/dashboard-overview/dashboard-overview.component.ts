import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard-overview',
  imports: [MatCardModule],
  templateUrl: './dashboard-overview.component.html',
})
export class DashboardOverviewComponent {
  
  ganhos = [
    { mes: 'Abr', altura: 45 },
    { mes: 'Mai', altura: 55 },
    { mes: 'Jun', altura: 52 },
    { mes: 'Jul', altura: 68 },
    { mes: 'Ago', altura: 65 },
    { mes: 'Set', altura: 100 },
  ];

  tipos = [
    { nome: 'Diurno (7h–19h)', qtd: '4 plantãoes', largura: 50 },
    { nome: 'Noturno (19h–7h)', qtd: '3 plantãoes', largura: 37 },
    { nome: 'Integral (24h)', qtd: '1 plantão', largura: 13 },
  ];
  
}