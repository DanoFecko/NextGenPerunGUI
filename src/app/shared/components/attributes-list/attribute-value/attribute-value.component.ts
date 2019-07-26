import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Attribute} from '../../../../core/models/Attribute';
import {AttributeValueMapComponent} from './attribute-value-map/attribute-value-map.component';

@Component({
  selector: 'app-attribute-value',
  templateUrl: './attribute-value.component.html',
  styleUrls: ['./attribute-value.component.scss']
})
export class AttributeValueComponent implements OnInit {

  constructor() {
  }

  @ViewChild('map', {static: false})
  mapComponent: AttributeValueMapComponent;

  @Input()
  attribute: Attribute;

  @Output() sendEventToParent2 = new EventEmitter();

  ngOnInit(): void {
  }

  updateMapAttribute() {
    if (this.attribute.type === 'java.util.LinkedHashMap') {
      this.mapComponent.updateAttribute();
    }
  }

  _sendEventToParent2() {
    this.sendEventToParent2.emit();
  }
}
