import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recent-shifts',
  imports: [ MatCardModule, MatIconModule],
  templateUrl: './recent-shifts.component.html',
  styles: ``,
})
export class RecentShiftsComponent {

  plantoesRecentes = [
    {
      hospital: 'Hospital das Clínicas',
      data: '20 Set',
      duracao: '12h',
      valor: 'R$ 980',
      status: 'Recebido',
      statusClasse: 'recebido',
    },
    {
      hospital: 'UPA Centro',
      data: '18 Set',
      duracao: '12h',
      valor: 'R$ 780',
      status: 'Recebido',
      statusClasse: 'recebido',
    },
    {
      hospital: 'Hospital São Lucas',
      data: '14 Set',
      duracao: '24h',
      valor: 'R$ 1.960',
      status: 'Pendente',
      statusClasse: 'pendente',
    },
    {
      hospital: 'UPA Norte',
      data: '10 Set',
      duracao: '12h',
      valor: 'R$ 780',
      status: 'Recebido',
      statusClasse: 'recebido',
    },
  ];

}
