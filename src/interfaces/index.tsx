export interface IRequestCalculator{
    amount: number
    installments: number
    mdr: number
    days?: string
}

export interface IResponseDays{
    1?: number
    15?: number
    30?: number
    90?: number
}

// export interface IRequestCalculator_2{
//     amount: number
//     installments: number
//     mdr: number
//     days?: Array<number>
// }