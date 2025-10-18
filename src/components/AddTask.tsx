import React from "react";

type AddTaskProps = {
  onAdd: () => void;
};

const AddTask: React.FC<AddTaskProps> = ({ onAdd }) => {
  return (
    <div>
      <button onClick={onAdd} className="add-button">＋</button>
    </div>
  );
};

export default AddTask;
