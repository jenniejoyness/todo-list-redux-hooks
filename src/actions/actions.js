
export const addTask = () => dispatch => {
    return [
        dispatch({
            type: 'tasks/addTask'
        }),
        dispatch({
            type: 'taskCounter/addTask'
        })
    ]
}

export const deleteTask = ({id, completed}) =>  dispatch => {
    return [
        dispatch({
            type: 'tasks/deleteTask',
            payload: {id}
        }),
        dispatch({
            type: 'taskCounter/deleteTask',
            payload: {completed}
        })
    ]
}

export const onToggle = ({checked}) =>  dispatch => {
    return dispatch({
        type: 'taskCounter/onToggle',
        payload: {checked}
    })
}