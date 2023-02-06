import { useState, useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { Task } from "../interfaces/Task";
import { HandleInputChange, HandleSubmit } from "../types/FormEvents";

interface Props {
  addNewTask: (task: Task) => void,
}

function TaskForm({ addNewTask }: Props) {

  const INITIAL_STATE = {
    title: "",
    description: "",
  }

  const [task, setTask] = useState(INITIAL_STATE);
  const inputTitle = useRef<HTMLInputElement>(null);

  const handleInputChange = ({ target: {name, value} }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  }

  const handleNewTaskSubmit = (evnt: HandleSubmit) => {
    evnt.preventDefault();
    addNewTask(task);
    setTask(INITIAL_STATE);
    inputTitle.current?.focus();
  }

  return (
    <div className="card card-body">
      <h1>Add Task!</h1>

      <form onSubmit={handleNewTaskSubmit}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Task title"
          name="title"
          onChange={handleInputChange}
          value={task.title}
          autoFocus
          ref={inputTitle}
        />

        <textarea
          className="form-control mb-3"
          name="description"
          placeholder="Task description"
          rows={2}
          onChange={handleInputChange}
          value={task.description}
        >
        </textarea>

        <button className="btn btn-primary">
          Save
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  )
}

export default TaskForm;
