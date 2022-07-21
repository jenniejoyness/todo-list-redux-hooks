import React, {Component} from 'react'
import {connect} from "react-redux"
import {addTask, deleteTask} from '../../actions/actions'
import Task from "../task/Task"
import Button from "../button/Button"
import {selectTaskList} from '../selectors/tasks'
import TaskCounter from '../taskCounter/TaskCounter'


class Tasks extends Component {
    render () {
        return (
            <>
                <TaskCounter uncompletedLength={this.props.uncompletedLength}/>
                <Button text='Add todo' onClick={this.props.addTask}/>
                <div className='todo-container'>
                    {Object.keys(this.props.tasks).map(taskId => {
                        return (
                            <Task
                                key={taskId}
                                task={this.props.tasks[taskId]}
                                onDelete={this.props.deleteTask}
                            />
                        )
                    })}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
    tasks: selectTaskList(state),
})

export default connect(mapStateToProps, {addTask, deleteTask})(Tasks)