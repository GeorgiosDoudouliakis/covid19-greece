import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toLocalTime'
})
export class ToLocalTimePipe implements PipeTransform {
  transform(value: string): string {
    if(!moment(value).isValid()) return "Μη έγκυρη ημερομηνία"
    return moment.utc(value).local().format('DD/MM/YYYY');
  }
}