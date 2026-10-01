import { Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

interface Opcao {
  valor: string;
  nome: string;
}

@Component({
  selector: 'app-history-filters',
  imports: [ 
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule, 
    MatSelectModule
  ],
  templateUrl: './history-filters.html',
  styleUrl: './history-filters.css',
})
export class HistoryFilters {

  busca = model('');
  status = model('todos');
  ano = model('todos');
  mes = model('todos');

  temFiltroAtivo = input(false);

  statusOpcoes: Opcao[] = [
    { valor: 'todos', nome: 'Todos' },
    { valor: 'recebido', nome: 'Recebido' },
    { valor: 'pendente', nome: 'Pendente' },
  ];

  anos: Opcao[] = [
    { valor: 'todos', nome: 'Todos os anos' },
    { valor: '2025', nome: '2025' },
    { valor: '2026', nome: '2026' },
  ];

  meses: Opcao[] = [
    { valor: 'todos', nome: 'Todos os meses' },
    { valor: 'janeiro', nome: 'Janeiro' },
    { valor: 'fevereiro', nome: 'Fevereiro' },
    { valor: 'março', nome: 'Março' },
    { valor: 'abril', nome: 'Abril' },
    { valor: 'maio', nome: 'Maio' },
    { valor: 'junho', nome: 'Junho' },
    { valor: 'julho', nome: 'Julho' },
    { valor: 'agosto', nome: 'Agosto' },
    { valor: 'setembro', nome: 'Setembro' },
    { valor: 'outubro', nome: 'Outubro' },
    { valor: 'novembro', nome: 'Novembro' },
    { valor: 'dezembro', nome: 'Dezembro' },
  ];

  limpar(): void {
    this.busca.set('');
    this.status.set('todos');
    this.ano.set('todos');
    this.mes.set('todos');
  }

}
