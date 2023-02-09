import styled, { css } from "styled-components/macro";

export const ListLanguagesBlock = styled.div`
max-width: 250px;
height: 20px;
position: relative;
background: #ffff;
margin-left: 30px;
margin-bottom: 50px;
border: 1px solid black;
`
export const Language = styled.div`
cursor: pointer;
position: relative;
flex: 1 0 auto;
text-align: center;
`

export const DropdownList = styled.ul`
list-style: none;
width: 100%;
padding: 0;
margin: 0;
position: absolute;
right: -1px;
top: calc(100% + 1px);
background: #ffff;
max-height: 100px;
overflow-y: auto;
border: 1px solid;
border-top: none;
text-align: center;
padding: 5px 0;
`
export const ListItem = styled.li`

${({ checked }) => checked
    ? css`color: red;`
    : ''}

:hover{
	color: red;
  }
  margin-bottom: 5px;
  :last-child {
	margin-bottom: 0px;
  }
`

export const LanguageBlock = styled.div`
padding-left: 10px;
display: flex;
height: 20px;
align-items: center;
`

export const CurrenLanguage = styled.span`
color:#2612de;
:hover{
	color: red;
  }
`