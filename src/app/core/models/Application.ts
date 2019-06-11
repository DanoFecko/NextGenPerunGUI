import {Group} from './Group';
import {User} from './User';
import {Vo} from './Vo';
import {ApplicationState} from '../enums/ApplicationState.enum';
import {ApplicationType} from '../enums/ApplicationType.enum';

export interface Application {
  id: number;
  beanName: string;
  createdAt: string;
  createdBy: string;
  extSourceLoa: number;
  extSourceName: string;
  extSourceType: string;
  fedInfo: string;
  group: Group;
  modifiedAt: string;
  modifiedBy: string;
  state: ApplicationState;
  type: ApplicationType;
  user: User;
  vo: Vo;
}
