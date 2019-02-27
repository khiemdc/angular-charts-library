import { Component, OnInit, Input } from '@angular/core';
import { ChartsService, DonutChart } from '../../public_api';

@Component({
  selector: 'tbg-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent implements OnInit {

  @Input() donutChartApi: string;

  public donutChart: DonutChart;

  public chartType = 'doughnut';
  public chartName = 'Doughnut Chart';
  public chartLegend = true;
  public chartOptions: any = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
};

  public donutChartColors: Array<any> = [
    {
      backgroundColor: ['#D58E88', '#941114', '#345881', '#2F4F4F'],
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    this.getDonutChart(this.donutChartApi);
  }

  getDonutChart(donutChartApi: any): void {
    this.chartService.getDonutChart(donutChartApi)
      .subscribe(res => {
        this.donutChart = res as DonutChart;
    }, error => console.error(error));
  }
}

