export interface IRequestCalculator{
    amount: number
    installments: number
    mdr: number
    days?: string
    // children?: JSX.Element|JSX.Element[]
}

export interface IResponseDays{
    1?: number 
    15?: number
    30?: number
    90?: number
    // children?: JSX.Element|JSX.Element[]
}
