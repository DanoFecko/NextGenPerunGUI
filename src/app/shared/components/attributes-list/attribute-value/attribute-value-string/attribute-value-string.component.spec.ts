import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeValueStringComponent } from './attribute-value-string.component';

describe('AttributeValueStringComponent', () => {
  let component: AttributeValueStringComponent;
  let fixture: ComponentFixture<AttributeValueStringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributeValueStringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributeValueStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
