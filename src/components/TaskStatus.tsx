import React from "react";

type Props = {
  TaskStatus: string;
};

const TaskStatus: React.FC<Props> = ({TaskStatus}) => {
    return <div className="task-status">{TaskStatus}</div>
}

export default TaskStatus;