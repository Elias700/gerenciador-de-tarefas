import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  imports: [],
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
