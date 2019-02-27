import { Component, OnInit, Input } from '@angular/core';
import { ChartsService, LineChart} from '../../public_api';

@Component({
  selector: 'tbg-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() lineChartApi: string;

  public lineChart: LineChart;
  public chartLegend = true;
  public chartType = 'line';

  public chartOptions: any = {
        responsive: true,
        legend: {
          position: 'bottom'
        }
    };

    public lineChartColors: Array<any> = [
      {

          backgroundColor: 'rgba(96, 125, 139, 0.7)',
          borderColor: '#008080',
          pointBackgroundColor: 'rgba(0,128,0,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          pointRadius: 8,
      },
      {
          backgroundColor: '#3C5770',
          borderColor: 'rgba(77,83,96,1)',
          pointBackgroundColor: 'rgba(77,83,96,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(77,83,96,1)',
          lineTension: 0,
          pointRadius: 10,
          pointStyle: 'rectRounded'
      },
      {
          backgroundColor: '#2F4F4F',
          borderColor: 'rgba(0,128,0,1)',
          pointBackgroundColor: 'rgba(148,159,177,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          pointStyle: 'rect',
          pointRadius: 6,
      },
      {
          backgroundColor: '#283593',
          borderColor: 'rgba(0,0,255,1)',
          pointBackgroundColor: 'rgba(0,0,255,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,159,177,0.8)',
          pointStyle: 'triangle',
          pointRadius: 10,
      }
  ];

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    this.getLineChart(this.lineChartApi);
  }

  getLineChart(lineChartApi: any): void {
    this.chartService.getLineChart(lineChartApi)
      .subscribe(res => {
        this.lineChart = res as LineChart;
    }, error => console.error(error));
  }

}
