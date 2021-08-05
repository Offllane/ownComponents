import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-with-placeholder',
  templateUrl: './card-with-placeholder.component.html',
  styleUrls: ['./card-with-placeholder.component.scss']
})
export class CardWithPlaceholderComponent implements OnInit {
  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
