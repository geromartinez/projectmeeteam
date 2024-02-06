
export interface IMetricsGaugeGPInfo {
    totalPercentage : number | null;
    elementsFilledOut : any
}

export interface IMetricsBarChart {
    labels : [string] | [];
    data : [number] | [];
    selected : {
        label: string | null;
        value: number | null;
    }
}

export interface IMetricsDoughnutChart {
    data: [
        { 
            label?:string,
            data?:number
        }
    ] | [],
    total?: number 
}