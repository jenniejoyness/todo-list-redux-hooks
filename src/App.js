import './App.css'
import Tasks from "./components/tasks/Tasks"
import {Header} from "./components/header/Header";

function App() {
  return (
      <div className='container'>
          <Header title='Todos'/>
          <Tasks/>
      </div>
  );
}

export default App;
