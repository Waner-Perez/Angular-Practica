import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter-page';
import { CounterTest } from './pages/counter-test/counter-test';
import { Hero } from './pages/hero/hero';
import { DragonballPage } from './pages/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super-page/dragonball-super-page';
import { DragonballSuperPage2 } from './pages/dragonball-super-page2/dragonball-super-page2';

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
        path: 'dragonbal-super-ConService',
        component: DragonballSuperPage2
    },
    {
        path: '**',
        redirectTo: ''
    }
];
