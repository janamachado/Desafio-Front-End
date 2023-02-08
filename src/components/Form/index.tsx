import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";

import Calculator from "../Calculator";
import { formSchema } from "../../validators/FormSchema";
import { IRequestCalculator, IResponseDays } from "../../interfaces";
import { Error, FormStyled } from "./styles"
import { Api } from "../../Services";


const Form = () =>{

    const [apiResponse, setApiResponse] = useState<any>(1)

    const {register, handleSubmit, formState: {errors}
    } = useForm<IRequestCalculator>({
        resolver: yupResolver(formSchema)
    })

    const getDataForm = (data: IRequestCalculator) =>{

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
    }

    return(
        <>
            <FormStyled onSubmit={handleSubmit(getDataForm)}>
                <div className="div_form">

                    <h2>Simule sua Antecipação</h2>

                    <label>Informe o valor da venda *</label>
                    <input 
                        type="text"
                        {...register('amount')}
                    />
                    <Error>{errors.amount?.message}</Error>

                    <label>Em quantas parcelas *</label>
                    <input
                        type="text"
                        {...register('installments')}
                    />
                    <Error>{errors.installments?.message}</Error>


                    <label>Informe o percentual do MDR *</label>
                    <input
                        type="text"
                        {...register('mdr')}
                    />
                    <Error>{errors.mdr?.message}</Error>

                    <label>Coloque os dias separados por vírgula</label>
                    <input
                    type="text"
                    {... register('days')}
                    />
                        
                    <button type="submit">Calcular</button>

                </div>
            </FormStyled>
            <Calculator
            apiResponse={apiResponse}
            />
        </>
    )
}

export default Form