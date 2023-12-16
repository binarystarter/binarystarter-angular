import { Route } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { StaticComponent } from './static.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const StaticRoutes: Route[] = [
  {
    path: '',
    component: StaticComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
        pathMatch: 'full',
      },
    ],
  },
];
