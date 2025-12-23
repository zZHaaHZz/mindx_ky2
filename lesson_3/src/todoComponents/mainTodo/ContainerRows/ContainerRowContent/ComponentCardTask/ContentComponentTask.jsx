const ContentComponentTask = ({ content, userName }) => {
    return (
        <div className="content-component-card-task">
            <span>{content}</span>
            <div className="user-name">{userName}</div>
        </div>
    );
};

export default ContentComponentTask;
