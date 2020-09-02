import styled , { createGlobalStyle } from 'styled-components';
// @ts/ignore
import bgimg from './img/nattu-adnan-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height : 100%
    }
    body {
        background-image : url(${bgimg});
        background-size : cover;
        margin : 0;
        padding : 0 20px;
        display : flex;
        justify-content : center;
    }

    *{
        font-family : 'Catmaran', sans-serif;
        box-sizing : border-box;
    }

`;

export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;

>p{
    color : #fff;
}
.score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

h1{
    font-family : Fascinate Inline;
    background-image : linear-gradient(90deg, #fff, #87f1ff);
    font-wight : 400;
    background-size : 100%;
    background-clip : text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter : drop-shadow(2px, 2px, #0085a3);
    font-size : 70px;
    text-align : center;
    margin : 20px;
}

.start, .next{
    cursor : pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
}

.results{
    width :1000px; 
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    p {
    font-size: 1rem;
    }
}
.start{
    max-width : 200px;
}
`;