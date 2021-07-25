import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent} from './chart/chart.component';
import { ResponsiveDesignCardComponent} from './responsive-design-card/responsive-design-card.component';


@NgModule({
  declarations: [
    ChartComponent,
    ResponsiveDesignCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChartComponent,
    ResponsiveDesignCardComponent
  ]
})
export class SharedModule { }
