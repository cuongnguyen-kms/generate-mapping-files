import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form-component',
  templateUrl: './input-form-component.component.html',
  styleUrls: ['./input-form-component.component.scss']
})
export class InputFormComponentComponent implements OnInit {

  radioOptions: string[] = ['Migration', 'SFTP Integration'];

  isDynamicEntity: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelectOptionHandler(selectedOption: string) {
    console.log(selectedOption);
  }

}
