import React from "react";
import TaskItem from "./TaskItem";
import Task from "../domain/Task";

type Props = {
  tasks: Task[];
};

const TaskList: React.FC<Props> = ({ tasks }) => {
  return (
    <section className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          status={task.status}
          name={task.name}
          color={task.color}
        />
      ))}
    </section>
  );
};

export default TaskList;
