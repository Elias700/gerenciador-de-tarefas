import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-upcoming-shifts',
  imports: [ MatCardModule, MatIconModule],
  templateUrl: './upcoming-shifts.component.html',
  styles: ``,
})
export class UpcomingShiftsComponent {

    proximosPlantoes = [
    {
      dia: '25',
      mes: 'Set',
      hospital: 'Hospital das Clínicas',
      setor: 'Pronto-Socorro',
      horario: '19:00–07:00',
      duracao: '12h',
      tipo: 'Noturno',
      valor: 'R$ 980',
      diaSemana: 'Sex',
      tipoClasse: 'noturno',
    },
    {
      dia: '28',
      mes: 'Set',
      hospital: 'UPA Centro',
      setor: 'Clínica Geral',
      horario: '07:00–19:00',
      duracao: '12h',
      tipo: 'Diurno',
      valor: 'R$ 780',
      diaSemana: 'Seg',
      tipoClasse: 'diurno',
    },
    {
      dia: '02',
      mes: 'Out',
      hospital: 'Hospital São Lucas',
      setor: 'UTI',
      horario: '07:00–07:00',
      duracao: '24h',
      tipo: 'Integral',
      valor: 'R$ 1.960',
      diaSemana: 'Sex',
      tipoClasse: 'integral',
    },
  ];
  
}
