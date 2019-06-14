import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupResourcesComponent } from './group-resources.component';

describe('GroupResourcesComponent', () => {
  let component: GroupResourcesComponent;
  let fixture: ComponentFixture<GroupResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
