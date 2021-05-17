import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe1 implements PipeTransform {
  public transform(value: Date): string {
    return value.toDateString();
  }
}
