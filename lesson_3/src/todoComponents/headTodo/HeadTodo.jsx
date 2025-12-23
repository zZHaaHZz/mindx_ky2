import BtnNews from "./BtnNews";
import Search from "./Search";
import './HeadTodo.css';
const HeadTodo = () => {
  return (
    <header>
    <Search />
    <BtnNews text="News Item"/> 
    </header>
  );
};

export default HeadTodo;