import styled from 'styled-components'

export const InputTextStyled = styled.input`
  background: #fff;
  margin: 10px;
  border: #f6f6ed;
  font-size: 15px;
  font-family: 'Quattrocento Sans', sans-serif;
  color: ${props => props.checked ? 'gray': {}};
  text-decoration: ${props => props.checked ? 'line-through': {}};

  &::placeholder {
  ${props => props.placeholder};
`