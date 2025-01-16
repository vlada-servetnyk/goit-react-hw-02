import s from './Feedback.module.css'

const Feedback = ({ value, totalFeedback, positiveFeedback }) => {
    const keyValue = Object.keys(value);

    return (
        <div>
            {(totalFeedback > 0) && (
            <ul className={s.list_feedback}>
                {keyValue.map(item => {
                    return <li key={item} className={s.item_list_feedback}>{item}: {value[item]}</li>
                })}
                    <li className={s.item_list_feedback}>Total: {totalFeedback}</li> 
                    <li className={s.item_list_feedback}>Positive: {positiveFeedback}%</li>    
            </ul> 
            )};
        </div>
    )

};

export default Feedback;