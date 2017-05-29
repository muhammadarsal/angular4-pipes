import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

	// first argument is the value to be transformed
	// transform method should return the transformed value
  transform(value: any, limit: number): any {

  	if (value.length > limit) {
	    return value.substr(0, limit) + ' ...';
  	}

  	return value;
  }

}
