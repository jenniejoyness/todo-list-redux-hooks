import React from 'react';
import {useSelector} from "react-redux";
import {StyledTaskCounter} from './TaskCounter.style'

const TaskCounter = () => {
    const uncompletedLength = useSelector(state => state.taskCounter.uncompletedLength)

    return (
        <StyledTaskCounter>{uncompletedLength ? `There is ${uncompletedLength} tasks left` : 'Add more todos!' }</StyledTaskCounter>
    )
}
export default TaskCounter