import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  public constructor() {}

  transform(value: Array<unknown>, callback: () => unknown): unknown {
    return value.filter(callback);
  }
}
