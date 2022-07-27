import PropTypes from 'prop-types'
import React from 'react'
import {useDispatch} from "react-redux";
import {addTask} from "../../actions/actions";
import { StyledButton} from './Button.style'

export const Button = (props) => {
    const dispatch = useDispatch()
    return (
        <div>
            <StyledButton backgroundColor={props.backgroundColor} onClick={() => dispatch(addTask())}>
                {props.text}
            </StyledButton>
        </div>
    )
}

Button.defaultProps = {
    backgroundColor: 'steelBlue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button