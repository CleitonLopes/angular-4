import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency' // define com o pipe vai ser chamado
})
export class FormatCurrencyPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //     return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL' }).format(value);
  // }

    // passando por parametro o locale formatCurrency:'en-US'
    // por default vem pt-BR
    transform(value: any, locale = 'pt-BR'): any {

        return new Intl.NumberFormat(locale).format(value);

    }


}
