//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
`;

export const Label = styled.label`
    height: 24px;
    font-size: 16px;
    color: #6f6f6f;
`;
export const InputStyle = styled.input`
   /*  display: flex;
    flex-direction: column;
    gap: 20px; */
    width: 100%;
    height: 48px;
    padding: 12px;
    outline: none;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #3f3f3f;
    font-family: Lato, sans-serif;

    &::placeholder{
        color: #a19f9f;
    }
`;

export const ErrorMessage = styled.div`
    height: 18px;
    color: red;
    font-size: 16px;
`;
