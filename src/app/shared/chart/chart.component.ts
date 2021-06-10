import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls : ['chart.component.css']
})
export class ChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chartCircle') chartCircle: ElementRef;
  segments = [
    {
      number: 1,
      title: 'Check',
      percents: 10,
      color: 'blue'
    },
    // {
    //   number: 2,
    //   title: 'Another one',
    //   percents: 15,
    //   color: 'red'
    // }
  ];

  constructor(private  renderer: Renderer2) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let percentCounter = 0;
    for (const segment of this.segments){
      const segmentDiv = this.renderer.createElement('div');
      this.renderer.addClass(segmentDiv, 'segment');
      this.renderer.setStyle(segmentDiv, `background-color`, segment.color);
      this.renderer.setStyle(segmentDiv, 'transform',
                                          `skew(${this.getSkewParameter(this.getDegreeFromPercent(segment.percents))}deg)
                                          rotate(-10deg)`);
      this.renderer.appendChild(this.chartCircle.nativeElement, segmentDiv);
      percentCounter += this.getSkewParameter(this.getDegreeFromPercent(segment.percents));
    }
  }

  // skew 0 -- 90 degree of circle (25%) (90/360)
  // skew 45 -- 45 degree of circle (12,5%) (45/360)
  // skew 15 -- 75 degree of circle (20,8%) (75/360)
  // skew 75 -- 15 degree of circle
  // if we need more than 90 degree of circle (more than 25%) than we use several segments (90 degree + some else)

  getDegreeFromPercent(percent: number): number {
    return percent * 360 / 100;
  }

  getSkewParameter(degree: number): number {
    if (degree <= 90) {
      return 90 - degree;
    }
  }
}
