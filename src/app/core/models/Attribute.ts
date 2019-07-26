import {AttributeDefinition} from './AttributeDefinition';

export interface Attribute extends AttributeDefinition {
  createdAt: string;
  createdBy: string;
  createdByUid: number;
  modifiedAt: string;
  modifiedBy: string;
  modifiedByUid: number;
  value: any;
  valueCreatedAt: string;
  valueCreatedBy: string;
  valueModifiedAt: string;
  valueModifiedBy: string;
}
