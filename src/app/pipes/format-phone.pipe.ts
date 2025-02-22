import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const withoutNonDigitsChars = value.replace(/\D/g, '');
    
    // Formatação para celulares brasileiros [(11) 91234-5678]
    if (withoutNonDigitsChars.length === 11) {
      return `(${withoutNonDigitsChars.slice(0, 2)}) ${withoutNonDigitsChars.slice(2, 7)}-${withoutNonDigitsChars.slice(7)}`;
    }

    // Formatação para telefone fixo [(11) 3456-7890]
    if (withoutNonDigitsChars.length === 10) {
      return `(${withoutNonDigitsChars.slice(0, 2)}) ${withoutNonDigitsChars.slice(2, 6)}-${withoutNonDigitsChars.slice(6)}`;
    }
    
    return value; // Retorna o valor original se não for reconhecido
  }

}
