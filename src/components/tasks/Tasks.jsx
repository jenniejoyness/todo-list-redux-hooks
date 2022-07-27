import React, {useEffect} from 'react'
import {useSelector, connect} from "react-redux"
import Task from "../task/Task"
import Button from "../button/Button"
import {Todo} from './Tasks.style'

export const Tasks = () => {
    const tasks = useSelector(state => state.taskList)
    return (
            <>
                <Button text='Add todo'/>
                <Todo>
                    {Object.keys(tasks).map(taskId => {
                        return (
                            <Task
                                key={taskId}
                                id={taskId}
                            />
                        )
                    })}
                </Todo>
            </>
        )
}

export default Tasks