import { HomePageComponent } from './pages/home-page/home-page.component';
import { StaticRootComponent } from './static-root/static-root.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import FeaturesPageComponent from './pages/features-page/features-page.component';
import FaqPageComponent from './pages/faq-page/faq-page.component';
import PricingPageComponent from './pages/pricing-page/pricing-page.component';
import PrivacyPolicyPageComponent from './pages/privacy-policy-page/privacy-policy-page.component';
import TermsOfServicePageComponent from './pages/terms-of-service-page/terms-of-service-page.component';
import LicensePageComponent from './pages/license-page/license-page.component';

export const StaticPaths = {
  home: '/',
  faq: `faq`,
  license: `license`,
  tos: `terms-of-service`,
  privacyPolicy: `privacy-policy`,
  pricing: `pricing`,
  features: `features`,
};

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: StaticRootComponent,
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
    ]),
  ],
  exports: [RouterModule],
})
export class StaticRoutingModule {}
