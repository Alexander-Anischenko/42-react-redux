//@import url(https://fonts.googleapis.com/css?family=Lato:100,100italic,300,300italic,regular,italic,700,700italic,900,900italic);
import styled from "@emotion/styled";

interface MainButtonProps {
    disabled: boolean;
}

export const MainButton = styled.button<MainButtonProps>`
    width: 100%;
    height: 70px;
    padding: 20px;
    background-color: ${({ disabled }) => (disabled ? "grey" : "#1f27f5")};
    font-weight: 600;
    font-size: 20px;
    font-family: Lato, sans-serif;
    color: aliceblue;
    border: none;
    border-radius: 4px;
    cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};

    &:hover {
        background-color: #1f26f5cc;
        transform: scale(0.99);
    }

    &:active {
        background-color: #1f27f5;
        transform: scale(0.98);
        box-shadow: 0 2px 2px #666;
    }
`;