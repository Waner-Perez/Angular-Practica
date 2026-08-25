import { Routes } from '@angular/router';
import { CountryLayout } from './layouts/country-layout/country-layout';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { ByCountryPage } from './pages/by-country-page/by-country-page';
import { ByRegionPage } from './pages/by-region-page/by-region-page';
import { CountryPage } from './pages/country-page/country-page';

export const countryRoutes: Routes = [
    {
        path: '',
        component: CountryLayout,
        children: [
            {
                path: 'by-capital',
                component: ByCapitalPage
            },
            {
                path: 'by-country',
                component: ByCountryPage
            },
            {
                path: 'by-region',
                component: ByRegionPage
            },
            {
                path: 'by/:code', //Esto se usa para pasar un parámetro dinámico en la ruta, en este caso el código del país.
                component: CountryPage
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            }
        ]
    },
    // {
    //     path: 'country',
    // },
];

export default countryRoutes;