import ContainerRowLeading from "./ContainerRowLeading/ContainerRowLeading";
import ContainerRowTrailing from "./ContainerRowTrailing/ContainerRowTrailing";
import './ContainerRowsHead.css';
const ContainerRowsHead = (props) => {
    return (
        <div className="row-head">
            <ContainerRowLeading nameStatus={props.nameStatus} sumTask={props.sumTask}/>  
            <ContainerRowTrailing onClickAdd={props.onClickAdd} onClickSub={props.onClickSub}/>
        </div>
    )
}

export default ContainerRowsHead;