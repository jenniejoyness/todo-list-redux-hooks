import React from 'react';
import {StyledHeader} from "./Header.style";

export const Header = (props) => {
    return (
        <StyledHeader>{props.title}</StyledHeader>
    )
}