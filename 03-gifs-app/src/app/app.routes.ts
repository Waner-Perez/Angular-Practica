import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        /* 
            loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page').then(m => m.DashboardPage) 

            esta forma de cargar un componente de forma perezosa (lazy loading) en Angular. Esto significa que el 
            componente solo se cargará cuando el usuario navegue a la ruta 'dashboard', lo que puede mejorar el 
            rendimiento de la aplicación al reducir el tamaño inicial del paquete.
        */

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
                path: '**',
                redirectTo: 'trending'
            }
        ]
    },
    // {
    //     path: 'trending',
    //     loadComponent: () => import('./gifs/pages/trending-page/trending-page')
    // },
    // {
    //     path: 'search',
    //     loadComponent: () => import('./gifs/pages/search-page/search-page')
    // },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
