import styled from 'styled-components'

export const StyledButton = styled.button`
    color: #fff;
    border: none;
    padding: 10px 16px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
    position: absolute;
    left: 430px;
    top: 10px;
    background: ${props => props.backgroundColor || 'steelBlue'};
    `