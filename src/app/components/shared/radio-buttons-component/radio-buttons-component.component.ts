import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'app-radio-buttons-component',
  templateUrl: './radio-buttons-component.component.html',
  styleUrls: ['./radio-buttons-component.component.scss']
})
export class RadioButtonsComponentComponent implements OnInit {

  @Input() radioOptions: string[] = [];
  @Input() label: string = '';

  @Output() onSelectOption: EventEmitter<string> = new EventEmitter();

  selectedOption: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangeOption($event: MatRadioChange) {
    this.onSelectOption.emit($event.value);
  }

}
