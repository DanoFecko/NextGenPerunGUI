import {Vo} from './Vo';
import {Facility} from './Facility';
import {ResourceTag} from './ResourceTag';

export interface RichResource {
  id: number;
  facilityId: number;
  voId: number;
  name: String;
  description: String;
  vo: Vo;
  facility: Facility;
  resourceTags: ResourceTag[];
}
