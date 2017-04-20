import {Pipe} from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhonePipe{
    transform(val:any, args:any) {
        val = val.charAt(0) != 0 ? '0' + val : '' + val;
        let newStr = '';

        for(let i=0; i < (Math.floor(val.length/2) - 1); i++){
           newStr = newStr+ val.substr(i*2, 2) + '-';
        }
        
        // return newStr + val.substr(let i*2);
    }
}