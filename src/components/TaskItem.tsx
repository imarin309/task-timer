import React, { useState } from "react";
import TaskName from "./TaskName";
import TaskStatus from "./TaskStatus";

type Props = {
  status: string;
  name: string;
  color: string;
  onUpdateTaskName?: (newName: string) => void;
  onUpdateTaskStatus?: (newStatus: string) => void;
};

const TaskItem: React.FC<Props> = ({
  status,
  name,
  color,
  onUpdateTaskName,
  onUpdateTaskStatus,
}) => {
  const [taskName, setTaskName] = useState(name);
  const [taskStatus, setTaskStatus] = useState(status);

  const handleUpdateName = (newName: string) => {
    setTaskName(newName);
    if (onUpdateTaskName) {
      onUpdateTaskName(newName);
    }
  };
    // ステータス更新
  const handleUpdateStatus = (newStatus: string) => {
    setTaskStatus(newStatus);
    if (onUpdateTaskStatus) {
      onUpdateTaskStatus(newStatus);
    }
  };

  return (
    <div className={`task-item ${color}`}>
      <TaskStatus TaskStatus={taskStatus} onUpdate={(newStatus) => handleUpdateStatus(newStatus)} />
      <TaskName TaskName={taskName} onUpdate={handleUpdateName} />
    </div>
  );
};

export default TaskItem;
