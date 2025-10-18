import React from "react";

type Props = {
  TaskName: string;
};


const TaskName: React.FC<Props> = ({TaskName}) => {
  return (<div className="task-name">{TaskName}</div>);
};

export default TaskName;