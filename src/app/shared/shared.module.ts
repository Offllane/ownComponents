import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent} from './chart/chart.component';
import { ResponsiveDesignCardComponent} from './cards/responsive-design-card/responsive-design-card.component';
import { WaterWaveTextComponent } from './text-effects/water-wave-text/water-wave-text.component';
import { VerticalOpeningTooltipComponent } from './tooltips/vertical-opening-tooltip/vertical-opening-tooltip.component';
import { CardWithPlaceholderComponent } from './cards/card-with-placeholder/card-with-placeholder.component';
import { IsometricIconComponent } from './icons/isometric-icon/isometric-icon.component';
import { IsometricBoxComponent } from './isometric/isometric-box/isometric-box.component';
import { KeyboardCheckboxComponent } from './controls/keyboard-checkbox/keyboard-checkbox.component';


@NgModule({
  declarations: [
    ChartComponent,
    ResponsiveDesignCardComponent,
    WaterWaveTextComponent,
    VerticalOpeningTooltipComponent,
    CardWithPlaceholderComponent,
    IsometricIconComponent,
    IsometricBoxComponent,
    KeyboardCheckboxComponent
  ],
  imports: [
    CommonModule,
  ],
    exports: [
        ChartComponent,
        ResponsiveDesignCardComponent,
        WaterWaveTextComponent,
        VerticalOpeningTooltipComponent,
        CardWithPlaceholderComponent,
        IsometricIconComponent,
        IsometricBoxComponent,
        KeyboardCheckboxComponent
    ]
})
export class SharedModule { }
