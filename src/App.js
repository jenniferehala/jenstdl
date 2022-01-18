
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tasks from './Components/Tasks';

function App() {

  const [task, setTask] = useState("")

  const [taskList, setTaskList] = useState([])

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTask = {
      checked: false,
      text: task,
      strike: 'none'
    }

    setTaskList([...taskList, newTask]);
  }

  const onDeleteHandler = (index) => {
    const newArray = [...taskList];
    newArray.splice(index,1);
    setTaskList(newArray);
  }

  const onCheckedHandler = (index) => {
    console.log("this was checked");
    taskList[index].checked = !taskList[index].checked
    if(taskList[index].checked === true){
      taskList[index].strike = 'line-through'
    } else {
      taskList[index].strike = 'none'
    }
    
    setTaskList([...taskList])
    
  }


  return (
    <div className="App">
      <h1>Jen's To Do List:</h1>
      <form onSubmit= {onSubmitHandler}>
        <input type="text" placeholder="task here..." name="text"  onChange={(event) => setTask(event.target.value)}/>
      <input type="submit" className="btn btn-primary" />
      </form>

        <div>
          {
            taskList.map((taskList, i) => {
              return <Tasks key={i} index={i} strike={taskList.strike} text={taskList.text} onDeleteHandler={onDeleteHandler} onCheckedHandler={onCheckedHandler}/>
            })
          }
        </div>

    </div>
    
  );
}

export default App;
