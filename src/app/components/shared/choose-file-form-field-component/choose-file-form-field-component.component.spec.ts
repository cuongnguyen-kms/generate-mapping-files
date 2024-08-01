import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseFileFormFieldComponentComponent } from './choose-file-form-field-component.component';

describe('ChooseFileFormFieldComponentComponent', () => {
  let component: ChooseFileFormFieldComponentComponent;
  let fixture: ComponentFixture<ChooseFileFormFieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseFileFormFieldComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseFileFormFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
