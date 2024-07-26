import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AppComponent } from './app.component';
import { InteractiveChartComponent } from './components/interactive-chart/interactive-chart.component';
import { GeoMapComponent } from './components/geo-map/geo-map.component';
import { QualitativeResearchComponent } from './components/qualitative-research/qualitative-research.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveChartComponent,
    GeoMapComponent,
    QualitativeResearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
