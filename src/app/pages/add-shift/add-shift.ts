import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-shift',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    
],
  templateUrl: './add-shift.html',
  styleUrl: './add-shift.css',
})
export class AddShift {

  hospitais = [
    'Hospital das Clínicas',
    'UPA Centro',
    'Hospital São Lucas',
    'UPA Norte',
    'Hospital Regional',
    'Santa Casa',
    'Outro',
  ];

  especialidades = [
    'Clínica Geral',
    'Pronto-Socorro',
    'UTI',
    'Cirurgia',
    'Pediatria',
    'Ginecologia',
    'Cardiologia',
    'Ortopedia',
    'Neurologia',
    'Outro',
  ];

  tipoPlantao = 'diurno';

  statusPagamento = 'aguardando';

  inicio = '';
  termino = '';

  get totalHoras(): string {
    if (!this.inicio || !this.termino) {
      return '0h';
    }

    const [horaInicio, minutoInicio] = this.inicio.split(':').map(Number);
    const [horaTermino, minutoTermino] = this.termino.split(':').map(Number);

    let inicioMinutos = horaInicio * 60 + minutoInicio;
    let terminoMinutos = horaTermino * 60 + minutoTermino;

    // Caso o plantão atravesse a meia-noite
    if (terminoMinutos < inicioMinutos) {
      terminoMinutos += 24 * 60;
    }

    const diferenca = terminoMinutos - inicioMinutos;

    const horas = Math.floor(diferenca / 60);
    const minutos = diferenca % 60;

    if (minutos === 0) {
      return `${horas}h`;
    }

    return `${horas}h ${minutos}min`;
  }

  selecionarTipo(tipo: string): void {
    this.tipoPlantao = tipo;

    switch (tipo) {
      case 'diurno':
        this.inicio = '07:00';
        this.termino = '19:00';
        break;

      case 'noturno':
        this.inicio = '19:00';
        this.termino = '07:00';
        break;

      case 'integral':
        this.inicio = '07:00';
        this.termino = '07:00';
        break;

      case 'personalizado':
        this.inicio = '';
        this.termino = '';
        break;
    }
  }

  salvarPlantao(formulario: NgForm): void {
    if (formulario.invalid) {
      formulario.control.markAllAsTouched();
      return;
    }

    console.log('Plantão salvo:', formulario.value);
    console.log('Total de horas:', this.totalHoras);

    // Futuramente:
    // this.shiftService.create(...)
  }

  cancelar(formulario: NgForm): void {
    formulario.resetForm();

    this.tipoPlantao = 'diurno';
    this.statusPagamento = 'aguardando';
    this.inicio = '';
    this.termino = '';
  }
}
