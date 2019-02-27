import { Component, OnInit, Input } from '@angular/core';
import { ChartsService } from '../../public_api';
import { BarChart } from '../model/bar-chart';

@Component({
  selector: 'tbg-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @Input() barChartApi: string;

  public barChart: BarChart;
  public chartLegend = true;
  public chartType = 'bar';

  public chartOptions: any = {
        responsive: true,
        legend: {
          position: 'bottom'
        }
    };

    public barChartColors: Array<any> = [
      { // first color
        backgroundColor: '#2F4F4F',
        borderColor: 'rgba(225,10,24,0.2)',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
      },
      { // second color
        backgroundColor: '#008080',
        borderColor: '#01579B',
        pointBackgroundColor: 'rgba(225,10,24,0.2)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#03A9F4',
        pointHoverBorderColor: 'rgba(225,10,24,0.2)'
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
        backgroundColor: '#3CB371',
        borderColor: 'rgba(0,128,0,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        pointStyle: 'rect',
        pointRadius: 6,
      }
    ];

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    this.getBarChart(this.barChartApi);
  }

  getBarChart(barChartApi: any): void {
    this.chartService.getBarChart(barChartApi)
      .subscribe(res => {
        this.barChart = res as BarChart;
    }, error => console.error(error));
  }

}