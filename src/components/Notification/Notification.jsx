import s from './Notification.module.css'

const Notification = ({ conditionRender }) => {
    return (
        <div>
            {!conditionRender && <p className={s.text}>No feedback yet</p>}
        </div>
    )
};

export default Notification;