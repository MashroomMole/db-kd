import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typePipe'
})
export class TypePipe implements PipeTransform {
  public transform(value: number): string {
    return value === 1 ? 'In premises' : 'Remotely';
  }
}
