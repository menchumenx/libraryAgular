import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeRef'
})
export class PipeRefPipe implements PipeTransform {

  transform(value: number): string {
    return 'Ref: ' + value;
  }

}
