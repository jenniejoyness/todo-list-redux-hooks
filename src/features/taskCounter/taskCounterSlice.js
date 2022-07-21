const initialState = {
    uncompletedLength: 1
}

export default function taskCounterSlice (state= initialState, action) {
    switch(action.type) {
        case 'taskCounter/addTask':
            return {
                uncompletedLength: state.uncompletedLength + 1
            }
        case 'taskCounter/deleteTask':
            return {
                uncompletedLength: action.payload.completed ? state.uncompletedLength : state.uncompletedLength - 1
            }
        case 'taskCounter/onToggle':
            console.log('state:', state)
            return {
                uncompletedLength: action.payload.checked ? state.uncompletedLength - 1 : state.uncompletedLength + 1
            }
        default:
            return state
    }
}
