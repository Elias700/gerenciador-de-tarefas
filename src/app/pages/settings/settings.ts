import { Component } from '@angular/core';
import { SettingsMenu } from './settings-menu/settings-menu';

@Component({
  selector: 'app-settings',
  imports: [ SettingsMenu],
  templateUrl: './settings.html',
  styleUrl: './settings.css',
})
export class Settings {

  profissional = {
    nome: 'Dra. Maria Silva',
    iniciais: 'MS',
    profissao: 'Médico(a)',
    crm: 'CRM-SP 45821',
    email: 'maria.silva@hospital.com'
  };

}
