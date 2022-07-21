import React from 'react';
import {connect} from "react-redux";

const TaskCounter = (props) => {
    return (
        <div className='task-count'>{props.uncompletedLength ? `There is ${props.uncompletedLength} tasks left` : 'Add more todos!' }</div>
    )
}
const mapStateToProps = state => ({
    uncompletedLength: state.taskCounter.uncompletedLength
})
export default connect(mapStateToProps)(TaskCounter)