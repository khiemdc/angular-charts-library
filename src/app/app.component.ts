import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TBG Charts Library';

  // Backend api will go here
  lineChartApi = '../assets/line-chart.json';
  barChartApi = '../assets/bar-chart.json';
  pieChartApi = '../assets/pie-chart.json';
  donutChartApi = '../assets/donut-chart.json';

}
