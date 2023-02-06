import { Task } from "../interfaces/Task";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Array<Task>,
  deleteTask: (id: number) => void,
}

function TaskList({ tasks, deleteTask }: Props) {
  return (
    <div className="row">
      {
        tasks.map(task => (
          <div className="col-md-4" key={task.id}>
            <TaskCard task={task} deleteTask={deleteTask} />
          </div>
        ))
      }
    </div>
  )
}

export default TaskList;
