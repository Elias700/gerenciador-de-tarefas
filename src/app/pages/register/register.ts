import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  dados = {
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };

  cadastrar(formulario: NgForm) {

    if (formulario.invalid) {
      return;
    }

    if (this.dados.senha !== this.dados.confirmarSenha) {
      return;
    }

  }

}