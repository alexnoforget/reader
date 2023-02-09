import styled, { css } from "styled-components/macro";

export const WordContainer = styled.span`
cursor: pointer;
height: 30px;
${({ newRow }) => newRow
        ? css`
    margin: auto;
    font-weight: bold;
    flex: 1 1 100%;
    `
        : ''}

:hover {
	background: yellow;
}
`