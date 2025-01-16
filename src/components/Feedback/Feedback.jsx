import s from './Feedback.module.css'

const Feedback = ({ value, conditionRender }) => {
    const keyValue = Object.keys(value);

    if (conditionRender === 0) {
        return null;
    }
    return (
        <div>
            {conditionRender && (
                <ul className={s.list_feedback}>
                {keyValue.map(item => {
                    return <li key={item} className={s.item_list_feedback}>{item}: {value[item]}</li>
                })}
            </ul> 
            )}
        </div>
    )

};

export default Feedback;