import {Pipe, PipeTransform} from '@angular/core';
import {Attribute} from '../../core/models/Attribute';

@Pipe({
  name: 'anyToString'
})
export class AnyToStringPipe implements PipeTransform {

  transform(attribute: Attribute, args?: any): string {
    if (attribute.value === undefined) {
      return '';
    }
    switch (attribute.type) {
      case 'java.lang.String': {
        return attribute.value;
      }
      case 'java.lang.Integer': {
        return attribute.value.toString();
      }
      case 'java.util.ArrayList': {
        return this.whenValueIsArray(attribute.value);
      }
      case 'java.util.LinkedHashMap': {
        return this.whenValueIsMap(attribute.value);
      }
      case 'java.lang.Boolean': {
        return attribute.value.toString();
      }
      default: {
        return attribute.value;
      }
    }
  }
  whenValueIsArray(value: Array<string>): string {
    let result = '';
    value.forEach(function (str) {
      result = result.concat(str + ', ');
    });
    return result;
  }

  whenValueIsMap(map: Map<string, string>): string {
    let result = '';
    for (const [key, value] of map.entries()) {
      result = result.concat(key + ': ' + value + ', ');
    }
    return result;
  }
}
