import s from './Feedback.module.css'

const Feedback = ({ value, totalFeedback }) => {
    const keyValue = Object.keys(value);

    if (totalFeedback === 0) {
        return null;
    }
    return (
        <div>
            {totalFeedback && (
            <ul className={s.list_feedback}>
                {keyValue.map(item => {
                    return <li key={item} className={s.item_list_feedback}>{item}: {value[item]}</li>
                })}
                    <li className={s.item_list_feedback}>Total: {totalFeedback}</li> 
                    <li className={s.item_list_feedback}>Positive: {Math.round((value.Good / totalFeedback) * 100)}%</li>    
            </ul> 
            )};
        </div>
    )

};

export default Feedback;