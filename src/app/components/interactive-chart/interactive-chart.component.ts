import { Component } from '@angular/core';
//import { Color } from '@swimlane/ngx-charts';
import { Color, ScaleType } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-interactive-chart',
  templateUrl: './interactive-chart.component.html',
  styleUrls: ['./interactive-chart.component.css']
})
export class InteractiveChartComponent {
  // Chart data
  barChartData = [
    { name: 'Germany', value: 40632 },
    { name: 'United States', value: 49737 },
    { name: 'France', value: 36745 },
    { name: 'United Kingdom', value: 36240 },
    { name: 'Spain', value: 33000 },
    { name: 'Italy', value: 35800 }
  ];

  lineChartData = [
    {
      name: 'Germany',
      series: [
        { name: '2010', value: 40632 },
        { name: '2000', value: 36953 },
        { name: '1990', value: 31476 }
      ]
    },
    {
      name: 'United States',
      series: [
        { name: '2010', value: 49737 },
        { name: '2000', value: 45986 },
        { name: '1990', value: 37060 }
      ]
    }
  ];

  pieChartData = [
    { name: 'Germany', value: 8940000 },
    { name: 'USA', value: 5000000 },
    { name: 'France', value: 7200000 }
  ];

  // Chart options
  view: [number, number] = [700, 400];
  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  gradient: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  explodeSlices: boolean = false;
  showLabels: boolean = true;
  doughnut: boolean = false;

  constructor() {}
}
