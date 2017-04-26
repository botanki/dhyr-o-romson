import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dateCount'})

export class DateCountPipe implements PipeTransform {

    transform(value: any):any {
        if (!value) {  return value; }
        if (value) {
            let oneDayInMilliSeconds = 86400000;
            let addY = value.slice(0, 4);
            let addM = value.slice(5, 7);
            let addD = value.slice(8, 10);

            // Got a TS2362 error on Angular Start, 
            // but found a workaround by adding the + to new date()
            
            let addedDate = +new Date(addY,addM-1,addD);
            let today = +new Date();
            let diffDays = Math.floor((today - addedDate) / oneDayInMilliSeconds);

            return diffDays;  
        }
    }
}