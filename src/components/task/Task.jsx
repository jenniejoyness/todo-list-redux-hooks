import React, {Component} from 'react'
import { FaTimes } from 'react-icons/fa'
import {connect} from "react-redux";
import {onToggle} from "../../actions/actions";

class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.task.id,
            text: '',
            completed: false,
            onDelete: props.onDelete,
            task: props.task,
        }
    }

    onChange = (e) => {
        this.setState(prevState => ({ ...prevState, text: e.target.value }))
    }

    onToggle = (e) => {
        this.props.onToggle({
            checked: e.currentTarget.checked
        })
        const completed = !this.completed
        this.setState(prevState => ({...prevState, completed}))
    }


    render () {
        return (
            <div>
                <input type='checkbox'
                       onChange={ (e) => this.onToggle(e)}
                />
                <input id='task-input' type='text'
                       placeholder='Write a todo...'
                       style={this.state.completed ? {textDecorationLine: 'line-through', color: 'gray'}: {}}
                       value={this.state.text}
                       onChange={(e) => this.onChange(e)}
                />
                <FaTimes onClick={(e) => this.state.onDelete({id: this.state.id,  completed: this.state.completed})}/>
            </div>
        )
    }
}

export default connect(() => ({}), {onToggle})(Task)