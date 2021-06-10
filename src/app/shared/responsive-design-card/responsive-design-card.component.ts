import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-responsive-design-card',
  templateUrl: './responsive-design-card.component.html',
  styleUrls: ['./responsive-design-card.component.scss']
})
export class ResponsiveDesignCardComponent implements OnInit {
  @Input() cardContent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
