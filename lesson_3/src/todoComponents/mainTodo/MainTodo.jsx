import { taskStatus, tasks, flags } from "../../../data/Task";
import ContainerRows from "./ContainerRows/ContainerRows";
import './MainTodo.css';
const MainTodo = () => {
    return (
        <div className="main-todo">
            {taskStatus.map(status => {
                const countTask = tasks.filter(
                    task => task.statusId === status.statusId
                ).length;

                return (
                    <ContainerRows
                        key={status.statusId}
                        status={status}
                        tasks={tasks}
                        nameStatus={status.name}
                        sumTask={countTask}
                    />
                );
            })}
        </div>
    );
};

export default MainTodo;
