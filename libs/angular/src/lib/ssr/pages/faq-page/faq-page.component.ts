import { Component } from '@angular/core';
import { AppLayoutModule } from '../../../layout/layout.module';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AppLayoutModule],
  templateUrl: './faq-page.component.html',
})
export class FaqPageComponent {}

export default FaqPageComponent;
