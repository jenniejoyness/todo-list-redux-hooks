
const initialState = {
    0: {
        id: 0
    }
}
function getId(state) {
    const maxId = Object.keys(state).reduce((maxId, taskId) => Math.max(taskId, maxId), -1)
    return maxId + 1
}

export default function tasksSlice (state= initialState, action) {
    switch(action.type) {
        case 'tasks/addTask':
            const id = getId(state)
            return {
                ...state,
                [id]: { id }
            }
        case  'tasks/deleteTask':
            const newTaskList = {...state}
            delete newTaskList[action.payload.id]
            return {...newTaskList}
        default:
            return state
    }
}