import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoSettingsExpirationComponent } from './vo-settings-expiration.component';

describe('VoSettingsExpirationComponent', () => {
  let component: VoSettingsExpirationComponent;
  let fixture: ComponentFixture<VoSettingsExpirationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoSettingsExpirationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoSettingsExpirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
