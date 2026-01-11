import { useState } from "react";
import Task from "./Task";

const TodoList = () => {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    const [text, setText] = useState("");

    const saveTasks = (newTasks) => {
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const addTask = () => {
        if (!text.trim()) return;
        saveTasks([...tasks, { id: Date.now(), text }]);
        setText("");
    };

    const deleteTask = (id) => {
        saveTasks(tasks.filter(t => t.id !== id));
    };

    const editTask = (id, newText) => {
        saveTasks(
            tasks.map(t =>
                t.id === id ? { ...t, text: newText } : t
            )
        );
    };

    return (
        <div>
            <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Enter task"
            />
            <button onClick={addTask}>Add</button>

            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onSave={editTask}
                    onDelete={deleteTask}
                />
            ))}
        </div>
    );
};

export default TodoList;
