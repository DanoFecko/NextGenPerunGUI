import {Pipe, PipeTransform} from '@angular/core';
import {ResourceTag} from '../../core/models/ResourceTag';

@Pipe({
  name: 'resourceTagsToString'
})
export class ResourceTagsToStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value == null) {
      return null;
    }
    const tags = <[ResourceTag]>value;

    let result = '';

    tags.forEach(function (tag) {
      result = result.concat(tag.tagName);
    });

    return result;
  }

}
