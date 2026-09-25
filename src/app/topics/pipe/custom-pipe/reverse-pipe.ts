import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): unknown {
   if(!value){
    return '';
   }

    return value.split('').reverse().join().replaceAll(',','');
    
  }

}


// ABC
// A B C 
// C B A
//CBA

