import React, { useState, useEffect, useRef } from "react";

type Props = {
  TaskStatus: string;
  onUpdate: (newStatus: string) => void;
};

const TaskStatus: React.FC<Props> = ({ TaskStatus, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(TaskStatus);
  const selectRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (isEditing && selectRef.current) {
      selectRef.current.focus();
    }
  }, [isEditing]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    onUpdate(newStatus);
    setIsEditing(false);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="task-status">
      {isEditing ? (
        <select
          ref={selectRef}
          value={status}
          onChange={handleChange}
          onBlur={handleBlur}
          className="border rounded px-2 py-1"
        >
          <option value="未着手">未着手</option>
          <option value="進行中">進行中</option>
          <option value="完了">完了</option>
        </select>
      ) : (
        <span onClick={() => setIsEditing(true)}>{status}</span>
      )}
    </div>
  );
};

export default TaskStatus;
