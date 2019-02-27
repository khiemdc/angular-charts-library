export class BarChartData {
    constructor(
        public data: Array<number>,
        public label: string
      ) {}
}

export class BarChart {
    constructor(
        public dataList: BarChartData[],
        public chartLabels: string[]
      ) {}
}

