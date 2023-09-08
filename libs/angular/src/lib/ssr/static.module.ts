import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FaqPageComponent } from './pages/faq-page/faq-page.component';
import { LicensePageComponent } from './pages/license-page/license-page.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { TermsOfServicePageComponent } from './pages/terms-of-service-page/terms-of-service-page.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { RouterModule } from '@angular/router';
import { StaticRootComponent } from './static-root/static-root.component';
import { StaticNavComponent } from './static-nav/static-nav.component';
import { FeaturesPageComponent } from './pages/features-page/features-page.component';
import { AppLayoutModule } from '../layout/layout.module';
import { FooterV1Component } from '../layout/footer-v1/footer-v1.component';
import { HeaderV1Component } from '../layout/header-v1/header-v1.component';
import { StaticRoutingModule } from './static-routing.module';

@NgModule({
  imports: [
    StaticRoutingModule,
    CommonModule,
    AppLayoutModule,
    RouterModule,
    FooterV1Component,
    HeaderV1Component,
  ],
  declarations: [
    StaticNavComponent,
    HomePageComponent,
    FaqPageComponent,
    LicensePageComponent,
    PricingPageComponent,
    TermsOfServicePageComponent,
    PrivacyPolicyPageComponent,
    StaticRootComponent,
    FeaturesPageComponent,
  ],
  exports: [],
})
export class StaticModule {}

export default StaticModule;
