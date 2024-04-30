import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #fafafa;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px;
    display: flex;
    align-items: center;
    
    input {
        background: transparent;
        border: 0;
        width: calc(100% - 30px);
        height: 100%;
        padding: 0 20px;
        color: #FFFF;
        font-size: 20px;
    }
`;
