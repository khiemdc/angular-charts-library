import { Component, OnInit, Input } from '@angular/core';
import { ChartsService, PieChart } from '../../public_api';

@Component({
  selector: 'tbg-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  @Input() pieChartApi: string;

  public pieChart: PieChart;

  public chartType = 'pie';
  public chartName = 'Pie Chart';
  public chartLegend = true;
  public chartOptions: any = {
    responsive: true,
    legend: {
      position: 'bottom'
    }
};


  public pieChartColors: Array<any> = [
    {
      backgroundColor: ['#D58E88', '#941114', '#345881', '#2F4F4F', '#008080', 'rgba(96, 125, 139, 0.7)'],
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private chartService: ChartsService) { }

  ngOnInit() {
    this.getPieChart(this.pieChartApi);
  }

  getPieChart(pieChartApi: any): void {
    this.chartService.getPieChart(pieChartApi)
      .subscribe(res => {
        this.pieChart = res as PieChart;
    }, error => console.error(error));
  }

}
