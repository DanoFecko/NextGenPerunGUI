import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeValueBooleanComponent } from './attribute-value-boolean.component';

describe('AttributeValueBooleanComponent', () => {
  let component: AttributeValueBooleanComponent;
  let fixture: ComponentFixture<AttributeValueBooleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeValueBooleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeValueBooleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
