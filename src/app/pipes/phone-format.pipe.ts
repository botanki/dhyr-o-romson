import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'phoneFormat'})
export class PhoneFormatPipe implements PipeTransform {
	transform(value: number, args: string[]): any {
		
		// simple way: return value.toLocaleString('sv-SE');
		let valueAsString = "" + value;

		if (valueAsString.length < 3) {
			return valueAsString;
		}

		let reversedString = "";
		

 		for (let i = valueAsString.length - 1; i >= 0; i--) {
 			

 			if (i%2 == 1 && i < valueAsString.length - 2 && i > 3 ) {
 				reversedString += " ";
 				
 			}
 			else if(i == 2){
 				reversedString += "-";
 			}

 			reversedString += valueAsString.charAt(i);
 		}

		let result = "";
 		for (let i = reversedString.length - 1; i >= 0; i--) {
 			result += reversedString.charAt(i);
 		}

		return result;
	}
}// import {Pipe} from '@angular/core';

// @Pipe({
//     name: 'phoneFormat'
// })
// export class PhonePipe{
//     transform(val:any, args:any) {
//         val = val.charAt(0) != 0 ? '0' + val : '' + val;
//         let newStr = '';

//         for(let i=0; i < (Math.floor(val.length/2) - 1); i++){
//            newStr = newStr+ val.substr(i*2, 2) + '-';
//         }
        
//         // return newStr + val.substr(let i*2);
//     }
// }