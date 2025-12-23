import NameTaskRowLeading from "./NameTaskRowLeading/NameTaskRowLeading.jsx";   
import SumTaskRowLeading from "./SumTaskRowLeading/SumTaskRowLeading.jsx";
import './ContainerRowLeading.css';
const ContainerRowLeading = (props) => {
    return (
        <div className="sub-name-status">
            <NameTaskRowLeading nameStatus={props.nameStatus}/>
            <SumTaskRowLeading sumTask={props.sumTask}/>
        </div>
    )
}

export default ContainerRowLeading;