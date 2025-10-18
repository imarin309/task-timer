import React from "react";

type Props = {
  status: string;
  name: string;
  color: string;
};

// TODO: タイマー機能の実装
const TaskItem: React.FC<Props> = ({ status, name, color }) => {
  return (
    <div className={`task-item ${color}`}>
      <div className="task-status">{status}</div>
      <div className="task-name">{name}</div>
      {/* <button className="task-button">start</button>
      <button className="task-button">stop</button>
      <div className="task-time">残：00:00</div> */}
    </div>
  );
};

export default TaskItem;
