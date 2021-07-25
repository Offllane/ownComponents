import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-water-wave-text',
  templateUrl: './water-wave-text.component.html',
  styleUrls: ['./water-wave-text.component.scss']
})
export class WaterWaveTextComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
