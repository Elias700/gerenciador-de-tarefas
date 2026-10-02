import { Routes } from '@angular/router';

import { Layout } from './layout/layout';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Register } from './pages/register/register';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { AddShift } from './pages/add-shift/add-shift';
import { History } from './pages/history/history';
import { Settings } from './pages/settings/settings';

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
                component: Dashboard,
            },
            {
                path: 'add-shift', 
                component: AddShift
            },
            {
                path: 'history',
                component: History
            },
            {
                path: 'settings',
                component: Settings
            }
        ]
    }

];
