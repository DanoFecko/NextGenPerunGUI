import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAttributeDialogComponent } from './delete-attribute-dialog.component';

describe('DeleteAttributeDialogComponent', () => {
  let component: DeleteAttributeDialogComponent;
  let fixture: ComponentFixture<DeleteAttributeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAttributeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAttributeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
