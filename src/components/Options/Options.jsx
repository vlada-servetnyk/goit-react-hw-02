
import s from './Options.module.css'

const Options = ({ value, upDate, btnReset, handleReset }) => {
    
    const keyValue = Object.keys(value);


    return (
        <div className={s.container}>
            {keyValue.map(item => {
                return <button onClick={() => upDate(item)} key={item} className={s.btn_option}>{item}</button>
            })}
            {btnReset !== 0 && <button key='reset' onClick={handleReset} className={s.btn_option}>Reset</button>}
        </div>
    )
};

export default Options;