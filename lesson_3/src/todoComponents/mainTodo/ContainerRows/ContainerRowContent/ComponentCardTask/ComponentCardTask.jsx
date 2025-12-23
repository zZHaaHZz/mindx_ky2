import HeadComponentTasks from "./HeadComponentTasks";
import ContentComponentTask from "./ContentComponentTask";
import FooterComponentTasks from "./FooterComponentTasks";

const ComponentCardTask = ({
    title,
    content,
    userName,
    countPin,
    deadline,
    colorCountPin,
    colorFlag,
    onClickEdit
}) => {
    console.log('Rendering ComponentCardTask:', userName);
    return (
        <div className="component-card-task">
            <HeadComponentTasks title={title} onClickEdit={onClickEdit} />
            <ContentComponentTask content={content} userName={userName} />
            <FooterComponentTasks
                countPin={countPin}
                deadline={deadline}
                colorCountPin={colorCountPin}
                colorFlag={colorFlag}
            />
        </div>
    );
};

export default ComponentCardTask;
