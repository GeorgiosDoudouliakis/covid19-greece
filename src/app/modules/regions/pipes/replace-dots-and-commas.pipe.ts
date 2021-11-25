import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceDotsAndCommas'
})
export class ReplaceDotsAndCommasPipe implements PipeTransform {
  transform(value: string | null): string | null {
    let dots: string[] = [];
    let countDots = 0;
    let indexOfSecondDot;

    if(value) {
      value = value.replace(/,/g, '.');
      const valueArr = Array.from(value);

      valueArr.forEach(char => {
        if(char === '.') {
          dots.push(char)
        }
      })

      if(dots.length === 1) return value;

      // If a value has a second dot inside it slice the value until this dot and return the sliced value with an 'approximately' indicator in front of it
      for(let i = 0; i < valueArr.length; i++) {
        if(valueArr[i] === '.') { 
          countDots++;
          continue;
        }
        if(countDots === 2) {
          indexOfSecondDot = i - 1;
          break;
        }
      }

      return `~${value.slice(0, indexOfSecondDot)}`;
    }

    return null;
  }
}