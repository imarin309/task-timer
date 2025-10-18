import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import TaskList from "./components/taskList";
import AddTask from "./components/AddTask";
import Task from "./domain/Task"



const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, status: "進行中", name: "task A", color: "teal" },
    { id: 2, status: "未着手", name: "task B", color: "pink" },
    { id: 3, status: "完了", name: "task C", color: "gray" },
  ]);

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      status: "未着手",
      name: `task ${String.fromCharCode(65 + tasks.length)}`, // A, B, C...と増える
      color: "pink",
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="app-container">
      <Header />
      <TaskList tasks={tasks} />
      <AddTask onAdd={handleAddTask} />
    </div>
  );
};

export default App;
