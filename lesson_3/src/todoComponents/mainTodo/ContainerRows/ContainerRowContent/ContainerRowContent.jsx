import ComponentCardTask from "./ComponentCardTask/ComponentCardTask.jsx";
import { users, flags } from "../../../../../data/Task.js";
import "./ContainerRowContent.css";

const ContainerRowsContent = ({ tasks, statusId, onClickEdit }) => {
    return (
        <div className="container-row-content">
            {tasks
                .filter(task => task.statusId === statusId)
                .map(task => {
                    const user = users.find(u => u.userId === task.assignedTo);
                    const flag = flags.find(f => f.flagId === task.flagId);

                    return (
                        <ComponentCardTask
                            key={task.taskId}
                            title={task.title}
                            content={task.description}
                            userName={user?.name}
                            countPin={task.flagId}
                            deadline={task.deadline}
                            colorFlag={flag?.color}
                            onClickEdit={onClickEdit}
                        />
                    );
                })}
        </div>
    );
};
export default ContainerRowsContent;