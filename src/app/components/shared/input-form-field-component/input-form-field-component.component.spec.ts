import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormFieldComponentComponent } from './input-form-field-component.component';

describe('InputFormFieldComponentComponent', () => {
  let component: InputFormFieldComponentComponent;
  let fixture: ComponentFixture<InputFormFieldComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFormFieldComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormFieldComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
