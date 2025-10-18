import React, { useState } from "react";
import TaskName from "./TaskName";
import TaskStatus from "./TaskStatus";

type Props = {
  status: string;
  name: string;
  color: string;
};

const TaskItem: React.FC<Props> = ({
  status,
  name,
  color,
}) => {
  const [taskName, setTaskName] = useState(name);
  const [taskStatus, setTaskStatus] = useState(status);

  const handleUpdateName = (newName: string) => {
    setTaskName(newName);
  };

  const handleUpdateStatus = (newStatus: string) => {
    setTaskStatus(newStatus);
  };

  return (
    <div className={`task-item ${color}`}>
      <TaskStatus TaskStatus={taskStatus} onUpdate={(newStatus) => handleUpdateStatus(newStatus)} />
      <TaskName TaskName={taskName} onUpdate={handleUpdateName} />
    </div>
  );
};

export default TaskItem;
