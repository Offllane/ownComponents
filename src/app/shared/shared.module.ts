import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent} from './chart/chart.component';
import { ResponsiveDesignCardComponent} from './responsive-design-card/responsive-design-card.component';
import { WaterWaveTextComponent } from './water-wave-text/water-wave-text.component';


@NgModule({
  declarations: [
    ChartComponent,
    ResponsiveDesignCardComponent,
    WaterWaveTextComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChartComponent,
    ResponsiveDesignCardComponent,
    WaterWaveTextComponent
  ]
})
export class SharedModule { }
