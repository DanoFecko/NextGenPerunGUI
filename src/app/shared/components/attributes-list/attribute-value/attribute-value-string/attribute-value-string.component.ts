import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Attribute} from '../../../../../core/models/Attribute';

@Component({
  selector: 'app-attribute-value-string',
  templateUrl: './attribute-value-string.component.html',
  styleUrls: ['./attribute-value-string.component.scss']
})
export class AttributeValueStringComponent implements OnInit {

  constructor() {
  }

  @Input()
  attribute: Attribute;

  @Output() sendEventToParent = new EventEmitter();

  value: string;

  ngOnInit() {
    this.value = this.attribute.value;
  }

  _sendEventToParent() {
    this.sendEventToParent.emit();
  }
}
