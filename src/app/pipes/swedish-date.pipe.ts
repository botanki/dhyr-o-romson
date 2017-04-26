import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'swedate'})

export class SwedishDatePipe implements PipeTransform {

    transform(value: any, args: any):any {
        
        if (!value) {  return value; }

        if (value) {
            let sweNames = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
            let year = value.slice(0, 4);
            let monthNumber = value.slice(5, 7);
            monthNumber = monthNumber.replace('0', '');
            let getname = sweNames[monthNumber - 1];
            let day = value.slice(8, 10);
            let time = value.slice(11, 16);

            // You can pass it two arguments with the swedate pipe: 
            // - is basic format, and + is with time included.
            
            if (args == '+') {
                let formatWithTime = day + ' ' + getname + ' ' + time;
                return formatWithTime;
            }

            if (args == '-') {
                let basicFormat = day + ' ' + getname + ' ' + year;
                return basicFormat;
            }
        }
    }
}