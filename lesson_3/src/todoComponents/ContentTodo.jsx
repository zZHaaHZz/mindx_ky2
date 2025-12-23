import HeadTodo from "./headTodo/HeadTodo";
import MainTodo from "./mainTodo/MainTodo";
import './contentTodo.css';

function ContentTodo() {
  return (
    <div className="content-todo">
    <HeadTodo  />  
    <MainTodo />
    </div>
  )
}

export default ContentTodo;