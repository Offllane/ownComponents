import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-isometric-icon',
  templateUrl: './isometric-icon.component.html',
  styleUrls: ['./isometric-icon.component.scss']
})
export class IsometricIconComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
