import Form from "../Form"
import { ContainerDiv, ContentDiv } from "./styles"

const Container = () =>{

    return (
        <div>
            <ContainerDiv>
                <ContentDiv>
                    <Form />
                </ContentDiv>
            </ContainerDiv>
        </div>
    )
}

export default Container