export class Data {
    constructor(
        public data: Array<number>,
        public label: string
      ) {}
}

export class LineChart {
    constructor(
        public parserList: Data[],
        public chartLabels: string[]
      ) {}
}

