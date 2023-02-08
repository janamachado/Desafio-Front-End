import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { DivCalculator } from "./styles"


const Calculator = ({apiResponse}: any) =>{

    // const {apiResponse, days} = useContext(AuthContext) 
    const qualquer = Object.values(apiResponse)
    console.log(qualquer)

    return(

        apiResponse?.[1] && apiResponse?.[15] && apiResponse?.[30] && apiResponse?.[90] ? 
        (
            <DivCalculator>
                <>
                    <div>
                        <h3>VOCÊ RECEBERÁ:</h3>
                    </div>
                    <p>Amanhã: <span> {apiResponse?.[1]?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </span></p>
                    <p>Em 15 dias: <span> {apiResponse?.[15]?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </span></p>
                    <p>Em 30 dias: <span> {apiResponse?.[30]?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </span></p>
                    <p>Em 90 dias: <span> {apiResponse?.[90]?.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </span></p>       
                </>
            </DivCalculator>
        )
        :
        (
            <DivCalculator>
                <span>
                    {
                        // qualquer.[0]
                    }

                </span>
            </DivCalculator>
        )
    )
        

            
    
}   

export default Calculator