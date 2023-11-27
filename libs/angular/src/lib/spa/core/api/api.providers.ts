import { ApiEndpointsService } from './api-endpoints.service';
import { PayloadApiEndpointsService } from './payload-api-endpoints.service';
import { PayloadService } from './payload.service';

export const apiProviders = () => [
  PayloadService,
  PayloadApiEndpointsService,
  ApiEndpointsService,
];
