import ContainerRowsHead from "./ContainerRowHead/ContainerRowHead.jsx";
import ContainerRowsContent from "./ContainerRowContent/ContainerRowContent.jsx";
import "./ContainerRows.css";

const ContainerRows = ({ status, tasks, nameStatus, sumTask }) => {
    const onClickAdd = () => {
        alert("Bạn đã nhấn nút thêm!");
    };

    const onClickSub = () => {
        alert("Bạn đã nhấn nút bớt!");
    };

    const onClickEdit = () => {
        alert("Bạn đã nhấn nút sửa!");
    };
    return (
        <div className="container-rows">
            <ContainerRowsHead
                nameStatus={nameStatus}
                sumTask={sumTask}
                onClickAdd={onClickAdd}
                onClickSub={onClickSub}
            />

            <ContainerRowsContent
                statusId={status.statusId}
                tasks={tasks}
                onClickEdit={onClickEdit}
            />
        </div>
    );
};

export default ContainerRows;
