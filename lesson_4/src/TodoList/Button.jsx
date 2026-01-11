export default function Button({ title, onClick, type = "button", className = "" }) {
    return (
        <button 
            type={type} 
            onClick={onClick} 
            className={className}
        >
            {title}
        </button>
    )
}
