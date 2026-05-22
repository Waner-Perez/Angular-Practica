import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CounterTest } from './pages/counter-test/counter-test';
import { Hero } from './pages/hero/hero';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';

export const routes: Routes = [
    {
        path: '',
        // component: CounterPage,
        component: CounterTest
    },
    {
        path: 'hero',
        component: Hero
    },
    {
        path: 'dragonball',
        component: DragonballPage
    },
    {
        path: 'dragonbal-super',
        component: DragonballSuperPage
    },
    {
        path: '**',
        redirectTo: ''
    }
];
