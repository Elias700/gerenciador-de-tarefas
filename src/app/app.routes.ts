import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Register } from './pages/register/register';
import { ForgotPassword } from './pages/forgot-password/forgot-password';

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
        path: 'register',
        component: Register
    },

    {
        path: 'forgot-password', 
        component: ForgotPassword
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
