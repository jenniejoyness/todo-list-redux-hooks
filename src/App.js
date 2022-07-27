import './App.css'
import Tasks from "./components/tasks/Tasks"
import {Header} from "./components/header/Header";
import TaskCounter from "./components/taskCounter/TaskCounter";
import React from "react";
import {Container} from './style'

function App() {
  return (
      <Container>
          <TaskCounter/>
          <Header title='Todos'/>
          <Tasks/>
      </Container>
  );
}

export default App;
