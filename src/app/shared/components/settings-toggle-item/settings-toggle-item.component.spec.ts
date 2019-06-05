import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsToggleItemComponent } from './settings-toggle-item.component';

describe('SettingsToggleItemComponent', () => {
  let component: SettingsToggleItemComponent;
  let fixture: ComponentFixture<SettingsToggleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsToggleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsToggleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
