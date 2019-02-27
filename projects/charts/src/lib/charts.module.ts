import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartsComponent } from './charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { DonutChartComponent } from './donut-chart/donut-chart.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ChartsModule
  ],
  declarations: [
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent
  ],
  exports: [
    ChartsComponent,
    LineChartComponent,
    BarChartComponent,
    PieChartComponent,
    DonutChartComponent
  ]
})
export class TbgChartsModule { }
