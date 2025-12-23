
import './HeadTodo.css';
const BtnNews = (props) => {
    const BtnNewsItem = () => {
        alert("You clicked News Item button");
    }
    return (
        <div className="btn-news">
            <button onClick={BtnNewsItem}>{props.text}</button>
        </div>
    )
}

export default BtnNews;