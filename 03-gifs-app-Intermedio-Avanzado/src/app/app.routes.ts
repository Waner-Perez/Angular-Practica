import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
         //otra forma mas limpia usando el loadComponent y es poniendo default el componente a cargar ejem: export default class DashboardPage {}
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page')
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page')
            },
            {
                //path: 'history/:query/:name', //parametros dinamicos, se puede pasar cualquier cosa en la url y se puede poner varios parametros separados por /, se pueden poner los parametros que se quieran y con el nombre que se quiera, lo importante es que luego en el componente se pueda acceder a ellos
                path: 'history/:query',
                loadComponent: () => import('./gifs/pages/gif-history/gif-history')
            },
            {
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
