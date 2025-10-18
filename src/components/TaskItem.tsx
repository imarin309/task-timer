import React, { useState } from "react";
import TaskName from "./TaskName";
import TaskStatus from "./TaskStatus";

type Props = {
  status: string;
  name: string;
  color: string;
  onUpdateTaskName?: (newName: string) => void;
};

const TaskItem: React.FC<Props> = ({ status, name, color, onUpdateTaskName }) => {
  const [taskName, setTaskName] = useState(name);

  const handleUpdateName = (newName: string) => {
    setTaskName(newName);
    if (onUpdateTaskName) {
      onUpdateTaskName(newName);
    }
  };

  return (
    <div className={`task-item ${color}`}>
      <TaskStatus TaskStatus={status}/>
      <TaskName TaskName={taskName} onUpdate={handleUpdateName} />
    </div>
  );
};

export default TaskItem;
