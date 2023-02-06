import { Task } from "../interfaces/Task";

interface Props {
  task: Task,
  deleteTask: (id: number) => void,
}

function TaskCard({ task, deleteTask }: Props) {
  return (
    <div className="card card-body mb-4">
      <h2>{task.title}</h2>
      <p>{task.id}</p>
      <p>{task.description}</p>

      <button className="btn btn-danger" onClick={() => task.id && deleteTask(task.id)}>Delete</button>
    </div>
  )
}

export default TaskCard;
