import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayloadService } from './payload.service';
import { PayloadApiEndpointsService } from './payload-api-endpoints.service';
import { ApiEndpointsService } from './api-endpoints.service';

@NgModule({
  providers: [PayloadService, PayloadApiEndpointsService, ApiEndpointsService],
  declarations: [],
  imports: [CommonModule],
})
export class ApiModule {}
