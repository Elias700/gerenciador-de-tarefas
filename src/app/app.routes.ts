import { Routes } from '@angular/router';
import { Login } from '../app/login/login'
import { Cadastro } from './cadastro/cadastro';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';

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
    },
    
    {
        path: '',
        component: Layout,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            }
        ]
    }

];
