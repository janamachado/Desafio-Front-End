import { DivCalculator } from "./styles"

const Calculator = ({apiResponse}: any) =>{

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
                <>
                    <div>
                        <h3>VOCÊ RECEBERÁ:</h3>
                    </div>
                    {
                        Object.keys(apiResponse).map((item, index) => ( 
                        <p key={index}>Em <span>{item} dias: {apiResponse[item].toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} </span></p>
                        ))
                    }
                </>
            </DivCalculator>
        )
    )
}   

export default Calculator