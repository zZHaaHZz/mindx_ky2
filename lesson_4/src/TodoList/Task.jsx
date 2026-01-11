import { useState } from "react";

const Task = ({ task, onSave, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);

    const save = () => {
        if (!text.trim()) return;
        onSave(task.id, text);
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <>
                    <input
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button onClick={save}>Save</button>
                </>
            ) : (
                <>
                    <span>{task.text}</span>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button onClick={() => onDelete(task.id)}>Delete</button>
                </>
            )}
        </div>
    );
};

export default Task;
