import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid grey;
    padding: 2px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 25);
    text-align: center;

    p{
        font-size: 1rem;
    }

`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover{
        opacity: 0.7;
    }

    button{
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width: 100%;
        height: 40px;
        margin: 5px;
        background: ${({correct, userClicked}) =>
            correct
                ? 'linear-gradient(90deg, #9cf39c, green)'
                : !correct && userClicked 
                ? 'linear-gradient(90deg, #ee6b6bc2, red)'
                : 'linear-gradient(90deg, #30308085, #516de7)'};
        border: 3px solid #c2bfbf;
        border-radius: 10px;
        box-shadow: 1px 2px 0px blue;
        color: white;
    }
`