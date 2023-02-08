import * as yup from 'yup'


export const formSchema = yup.object().shape({

    amount: yup
    .number()
    .required('Campo obrigatório')
    .min(1000, "Essa campo aceita o valor mínimo de 1000"),

    installments: yup
    .number()
    .required('Campo obrigatório')
    .min(1, "Você deve inserir pelo menos 1 parcela")
    .max(12, "Você pode inserir no máximo 12 parcelas"),

    mdr: yup
    .number()
    .required('Campo obrigatório')
    .max(100, "Esse campo aceita um valor máximo de 100")
})