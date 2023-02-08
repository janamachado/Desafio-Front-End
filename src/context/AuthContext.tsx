import { createContext, ReactNode, useState } from "react"
import { IRequestCalculator, IResponseDays } from "../interfaces"
import { Api } from "../Services"

export interface IProviderProps {
    children: ReactNode
}

export interface IContext {
    getDataForm: (props: any) => void
    apiResponse: any
    days: any
}

export const AuthContext = createContext<IContext>( {} as IContext)

const AuthProvider = ({children}: IProviderProps) =>{

    const [apiResponse, setApiResponse] = useState<any>()

    const [days, setDays] = useState<any>()

    const getDataForm = (data: IRequestCalculator) =>{
        console.log(data)

        let newData = {}
 
        if(data.days){
            const daysArray = data.days.split(",").map((item)=> Number(item))

            newData = {
                "amount": data.amount,
                "installments": data.installments,
                "mdr": data.mdr,
                "days": daysArray
            }
        }else{
            newData = {
                "amount": data.amount,
                "installments": data.installments,
                "mdr": data.mdr
            }
        }
        Api.post("", newData)
        .then((res)=>{
            console.log(res.data)
            setApiResponse(res.data)
        })
        .catch((err)=> console.log("Esse é o erro ->", err))
        setDays(data.days)

    }
        return(
            <AuthContext.Provider
                value={{
                    getDataForm,
                    apiResponse,
                    days
                }}
            >
                {children}
            </AuthContext.Provider>
        )
}

export default AuthProvider