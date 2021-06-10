import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChartComponent } from './shared/chart/chart.component';
import { ResponsiveDesignCardComponent } from './shared/responsive-design-card/responsive-design-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ResponsiveDesignCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
