import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-opening-tooltip',
  templateUrl: './vertical-opening-tooltip.component.html',
  styleUrls: ['./vertical-opening-tooltip.component.scss']
})
export class VerticalOpeningTooltipComponent implements OnInit {
  public toggle = false;
  public menuItems = [
    {
      title: 'Cards',
      icon: 'fa fa-id-card-o',
      href: '#'
    },
    {
      title: 'Tooltips',
      icon: 'fa fa-bars',
      href: '#'
    },
    {
      title: 'Text effects',
      icon: 'fa fa-font',
      href: '#'
    },
    {
      title: 'Coming soon',
      icon: 'fa fa-clock-o',
      href: '#'
    },
    {
      title: 'Coming soon',
      icon: 'fa fa-clock-o',
      href: '#'
    },
    {
      title: 'Coming soon',
      icon: 'fa fa-clock-o',
      href: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  toggleFunction(): void {
    this.toggle = !this.toggle;

  }
}
