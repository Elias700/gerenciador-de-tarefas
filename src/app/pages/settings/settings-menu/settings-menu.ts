import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings-menu',
  imports: [ MatIconModule ],
  templateUrl: './settings-menu.html',
  styleUrl: './settings-menu.css',
})
export class SettingsMenu {

  opcoes = [
    {
      nome: 'Perfil',
      icone: 'person',
      ativo: true
    },
    {
      nome: 'Financeiro',
      icone: 'payments',
      ativo: false
    },
    {
      nome: 'Notificações',
      icone: 'notifications',
      ativo: false
    },
    {
      nome: 'Segurança',
      icone: 'shield',
      ativo: false
    }
  ];

  selecionarOpcao(opcaoSelecionada: string): void {

    this.opcoes = this.opcoes.map(opcao => ({
      ...opcao,
      ativo: opcao.nome === opcaoSelecionada
    }));

  }
  
}
