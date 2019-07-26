import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeValueMapComponent } from './attribute-value-map.component';

describe('AttributeValueMapComponent', () => {
  let component: AttributeValueMapComponent;
  let fixture: ComponentFixture<AttributeValueMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeValueMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeValueMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
