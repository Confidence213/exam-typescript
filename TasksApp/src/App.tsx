import { useState } from "react";
import Logo from "./assets/react.svg";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./interfaces/Task";

interface Props {
  title?: string,
}

function App({ title }: Props) {

  const [tasks, setTasks] = useState<Array<Task>>([
    {
      id: 1,
      title: "New language!",
      description: "Learn TypeScript + React",
      completed: false
    }
  ])

  const getCurrentTimeStamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimeStamp(), completed: false }
    ])
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div className="text-white" style={{ height: "100vh" }}>

      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand" style={{ display: "flex" }}>
            <img src={Logo} alt="React logo" style={{ width: "4rem" }} />
            <p style={{
              paddingTop: "15px",
              paddingLeft: "15px",
              fontStyle: "italic",
              fontWeight: "bold"
            }}>
              {title && <h1>{title}</h1>}
            </p>
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-3"><TaskForm addNewTask={addNewTask} /></div>

          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 

export default App;
