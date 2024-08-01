import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-form-field-component',
  templateUrl: './input-form-field-component.component.html',
  styleUrls: ['./input-form-field-component.component.scss']
})
export class InputFormFieldComponentComponent implements OnInit {

  @Input() label: string = '';
  @Input() textboxPlaceholder: string = '';

  @Output() onInputChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public inputChange($event: any) {
    console.log($event.target.value);
  }

}
