import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-keyboard-checkbox',
  templateUrl: './keyboard-checkbox.component.html',
  styleUrls: ['./keyboard-checkbox.component.scss']
})
export class KeyboardCheckboxComponent implements OnInit {
  @Input() data;
  public isChecked: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
