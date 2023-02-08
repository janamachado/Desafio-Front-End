import styled from "styled-components"

export const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* padding: 0 15px; */
    align-items: center;

    width: 60%;
    height: 500px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    background-color: aliceblue;
    border-radius: 10px 0 0 10px;

    .div_form{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;

        margin-top: 25px;
        width: 300px;

        button{
            padding: 15px 40px;
            background-color: white;
            border: 1px solid lightgray;
            border-radius: 5px;
            cursor: pointer;

            &:hover{
                background-color: lightgray;
                /* color: white; */
            }
        }
    }

    h2{
        color: #656565;
    }

    label{
        font-size: 14px;
        color: #656565;
        margin-top: 5px;
    }

    input{
        width: 260px;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid lightgrey;

        margin-bottom: 15px;

        &:focus-visible {
        outline: 1.5px solid #3D75BB;
        border-radius: 5px;
        border-style: none;
    }



    }

`

export const Error = styled.span`
    color: #f10;
    font-size: 10px;
    margin: 2px 0px;
`