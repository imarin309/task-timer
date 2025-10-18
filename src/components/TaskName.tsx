import React, { useState, useRef, useEffect } from "react";

type Props = {
  TaskName: string;
  onUpdate: (newName: string) => void;
};

const TaskName: React.FC<Props> = ({ TaskName, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(TaskName);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleBlur = () => {
    setIsEditing(false);
    onUpdate(name);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleBlur();
    }
  };

  return (
    <div className="task-name">
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="border rounded px-2 py-1 w-full"
        />
      ) : (
        <span onClick={() => setIsEditing(true)}>{name}</span>
      )}
    </div>
  );
};

export default TaskName;
