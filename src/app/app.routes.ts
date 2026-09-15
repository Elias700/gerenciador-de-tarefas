import { Routes } from '@angular/router';
import { Login } from '../app/login/login'
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        component: Login
    },
    {
        path: 'cadastro',
        component: Cadastro
    }
];
