import { Route } from '@angular/router';
import FeaturesPageComponent from './pages/features-page/features-page.component';
import FaqPageComponent from './pages/faq-page/faq-page.component';
import PricingPageComponent from './pages/pricing-page/pricing-page.component';
import PrivacyPolicyPageComponent from './pages/privacy-policy-page/privacy-policy-page.component';
import TermsOfServicePageComponent from './pages/terms-of-service-page/terms-of-service-page.component';
import LicensePageComponent from './pages/license-page/license-page.component';
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
        path: 'license',
        component: LicensePageComponent,
        pathMatch: 'full',
      },
      {
        path: 'features',
        component: FeaturesPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'faq',
        component: FaqPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'pricing',
        component: PricingPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'terms-of-service',
        component: TermsOfServicePageComponent,
        pathMatch: 'full',
      },
    ],
  },
];
