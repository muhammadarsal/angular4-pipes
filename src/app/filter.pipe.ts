import { Pipe, PipeTransform } from '@angular/core';

/*
  By default pipes are pure. It means that whenever the data changes,
  pipe doesn't get recalculated for the new data. To force this recalculation
  of pipe for the new data, set the pure property to false (though this 
  might cost performance).
*/
@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {

    if (value.length === 0 || filterString === '') {
	    return value;
    }
  	const resultArray = [];

    for(const item of value) {

    	if (item[propName] === filterString) {
    		resultArray.push(item)
    	}
    }

    return resultArray;
  }

}
