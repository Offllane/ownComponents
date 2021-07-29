import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent} from './chart/chart.component';
import { ResponsiveDesignCardComponent} from './cards/responsive-design-card/responsive-design-card.component';
import { WaterWaveTextComponent } from './text-effects/water-wave-text/water-wave-text.component';
import { VerticalOpeningTooltipComponent } from './tooltips/vertical-opening-tooltip/vertical-opening-tooltip.component';


@NgModule({
  declarations: [
    ChartComponent,
    ResponsiveDesignCardComponent,
    WaterWaveTextComponent,
    VerticalOpeningTooltipComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ChartComponent,
    ResponsiveDesignCardComponent,
    WaterWaveTextComponent,
    VerticalOpeningTooltipComponent
  ]
})
export class SharedModule { }
