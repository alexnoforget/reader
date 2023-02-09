import styled from "styled-components/macro";

export const Wrapper = styled.div`
max-width: 1024px;
margin: 0 auto;
padding-top: 40px;
position: relative;
background: wheat;
`
export const ContentContainer = styled.div`
width: 760px;
height: 400px;
overflow-y: scroll;
border: 1px solid black;
margin: 0 auto;
`

export const TextBlock = styled.div`
width: 100%;
height: 100%;
font-size: 20px;
line-height: 30px;
display: flex;
flex-wrap: wrap;
gap: 5px;
position: relative;
background: white;
`
export const TranslateBlock = styled.div`
width: 100%;
height: 40px;
border-top: 1px solid black;
display:flex;
justify-content: space-around;
align-items: center;
font-size: 30px;
`
const Button = styled.button`
width: 100px;
height: 30px;
`
export const CloseButton = styled(Button)``

export const LoadBlock = styled.div`
width: 300px;
heght: 100px;
color: red;
position: absolute;
bottom: 50%;
left: 50%;
background: white;
border: 1px solid black;
text-align: center;
transform: translate(-50%, 0);
`
export const NextPage = styled(Button)``
export const PrevPage = styled(Button)``

export const ButtonsBlock = styled.div`
display:flex;
justify-content: space-around;
margin-bottom: 40px;
`

export const PageNumber = styled.span`
font-size: 30px;
font-weight: bold;
`
