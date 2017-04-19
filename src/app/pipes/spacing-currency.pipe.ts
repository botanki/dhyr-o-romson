import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'spacingCurrency'})
export class SpacingCurrencyPipe implements PipeTransform {
	transform(value: number, args: string[]): any {
		
		// simple way: return value.toLocaleString('sv-SE');
		let valueAsString = "" + value;

		if (valueAsString.length < 4) {
			return valueAsString;
		}

		let reversedString = "";
		let iteration = 0;

 		for (let i = valueAsString.length - 1; i >= 0; i--) {
 			iteration++;

 			if (iteration == 4) {
 				reversedString += " ";
 				iteration = 1;
 			}

 			reversedString += valueAsString.charAt(i);
 		}

		let result = "";
 		for (let i = reversedString.length - 1; i >= 0; i--) {
 			result += reversedString.charAt(i);
 		}

		return result;
	}
}