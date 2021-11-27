import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceCommasWithDots'
})
export class ReplaceCommasWithDotsPipe implements PipeTransform {
  transform(value: string | null): string | null {
    if(value) return value.replace(/,/g, '.');
    return null;
  }
}