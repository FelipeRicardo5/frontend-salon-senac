import styles from './Input.module.css'

function Input({ text, type, value, onChange, placeholder, min, max, variant = 'default' }) {
    return(
        <label className={styles.labelInput} >
            {text}
            <input 
            type={type} 
            value={value} 
            onChange={onChange} 
            placeholder={placeholder} 
            min={min} max={max} 
            required 
            className={`${styles.inpt} 
            ${variant === 'simple' ? styles.simple : ''} 
            ${variant === 'normal' ? styles.normal : ''}
            ${variant === 'medium' ? styles.secondary : ''}
            `}
                 
            >

            </input>
        </label>
    )
}

export default Input;