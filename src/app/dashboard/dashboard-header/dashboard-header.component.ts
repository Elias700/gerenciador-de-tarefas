import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent {
  // Inputs reativos usando Signals do Angular 21
  greeting = input<string>('Bom dia,');
  userName = input<string>('Dra. Maria Silva');
  userSpecialty = input<string>('Médica — CRM-SP 45821');

  // Evento emitido ao clicar no botão "+ Novo Plantão"
  newShiftClick = output<void>();

  onNewShift(): void {
    this.newShiftClick.emit();
  }
}





