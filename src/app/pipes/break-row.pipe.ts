import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'breakrow'})
export class BreakRowPipe implements PipeTransform {
	transform(value: string, args: string[]): any {
		//find every word and make sure the first
		//letter is capitalized

		if(!value){ return value; }

		return '<p>' + value.split('\n').join('</p><p>') + '</p>';


	}
}
