import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BarChart } from '../lib/model/bar-chart';
import { LineChart, PieChart, DonutChart } from '../public_api';


@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private httpClient: HttpClient) { }

  public getLineChart(lineChartApi: string): Observable<LineChart> {
    return this.httpClient.get<LineChart>(`${lineChartApi}`);
    }

  public getBarChart(barChartApi: string): Observable<BarChart> {
    return this.httpClient.get<BarChart>(`${barChartApi}`);
    }

  public getPieChart(pieChartApi: string): Observable<PieChart> {
    return this.httpClient.get<PieChart>(`${pieChartApi}`);
    }

  public getDonutChart(donutChartApi: string): Observable<DonutChart> {
    return this.httpClient.get<DonutChart>(`${donutChartApi}`);
  }
}
