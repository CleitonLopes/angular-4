import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, locale = 'pt-BR'): any {

    if (value < 10) {

      return value;

    }

    let arrDate = value.split('-');

    if (arrDate.length < 3) {

      return value;

    }

    let dateFormated = new Date(arrDate[0], arrDate[1]-1, arrDate[2]);

    return new Intl.DateTimeFormat(locale).format(dateFormated);

  }

}
