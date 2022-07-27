import React, {useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import {connect} from 'react-redux'
import {onToggle, deleteTask} from '../../actions/actions'
import {InputTextStyled} from "./Task.styled";

const Task = (props) => {
    const [text, setText] = useState('')
    const [checked, setChecked] = useState(false)



    const toggle = (e) => {
        props.onToggle({
            checked: e.currentTarget.checked
        })

        setChecked(!checked)
        debugger
    }


    return (
        <div>
            <input type='checkbox'
                   onChange={ (e) => toggle(e)}
            />
            <InputTextStyled placeholder='Write a todo...' checked={checked} onChange={(e) => setText(e.target.value)}/>
            <FaTimes onClick={(e) => props.deleteTask({id: props.id,  completed: checked})}/>
        </div>
    )

}

export default connect(() => ({}), {onToggle, deleteTask})(Task)