import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectValuesPipe } from './pipes/object-values.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [ObjectValuesPipe, FilterPipe],
  exports: [ObjectValuesPipe, FilterPipe],
  imports: [CommonModule],
})
export class UtilsModule {}
