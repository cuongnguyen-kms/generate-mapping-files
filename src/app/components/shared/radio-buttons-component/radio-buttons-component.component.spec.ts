import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonsComponentComponent } from './radio-buttons-component.component';

describe('RadioButtonsComponentComponent', () => {
  let component: RadioButtonsComponentComponent;
  let fixture: ComponentFixture<RadioButtonsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioButtonsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
