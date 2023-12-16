import { Pipe, PipeTransform } from "@angular/core";

/**
 * Pipe equivalent for Object.values
 */
@Pipe({
  name: "objectValues",
})
export class ObjectValuesPipe implements PipeTransform {
  transform(obj: Record<string, any>): any[] {
    return Object.values(obj);
  }
}
