import styled, { createGlobalStyle } from "styled-components";
import bgimage from "./images/bgimage.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${bgimage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
        font-family: 'Roboto Slab', serif;
        font-weight: 800;
    }
`;

export const Wrapper = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: left;

    > p {
        color: #fff;
    }   

    .btn_start{
        display: flex;
        justify-content: center;
    }

    .score{
        color: #fff;
        font-size: 2rem;
        margin: 0;
    }

    h1{
        margin: 20px;
        font-family: 'Sansita Swashed', cursive;
        font-size: 30px;
        text-align: center;
        color: #459da1;
        text-shadow: 1px 1px 2px black;
    }

    .loading{
        display: flex;
        justify-content: center;
    }

    .preloader{
        width: 100px;
    }

    .button{
        margin: 20px 0;
        padding: 0 40px;
        height: 40px;
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #067f88ad);
        border: 2px solid #c2bfbf;
        border-radius: 10px;
        box-shadow: 0px 5px 10px grey;
    }
`

