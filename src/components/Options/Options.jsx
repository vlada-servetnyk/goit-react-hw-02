import s from './Options.module.css'

const Options = ({ value, upDate }) => {
    
    const keyValue = Object.keys(value);

    return (
        <div className={s.container}>
            {keyValue.map(item => {
                return <button onClick={() => upDate({item})} key={item} className={s.btn_option}>{item}</button>
            })}
        </div>
    )
};

export default Options;