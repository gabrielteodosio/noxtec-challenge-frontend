import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string | number | Date | undefined): string {
    if (!value) return '';

    const date = new Date(value);
    if (date) {
      const dia = String(date.getDate()).padStart(2, "0");
      const mes = String(date.getMonth() + 1).padStart(2, "0");
      const ano = date.getFullYear();
      
      return `${dia}/${mes}/${ano}`;
    }
    
    return value as string;
  }

}
