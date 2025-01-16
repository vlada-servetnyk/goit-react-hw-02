import s from './Notification.module.css'

const Notification = ({ totalFeedback }) => {
    return (
        <div>
            {!totalFeedback && <p className={s.text}>No feedback yet</p>}
        </div>
    )
};

export default Notification;