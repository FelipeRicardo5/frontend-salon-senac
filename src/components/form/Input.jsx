import styles from './Input.module.css'

function Input({ text, type, value, onChange, placeholder, min, max, variant = 'default', variantLabel = 'default' }) {
    return(
        <label className={`${styles.labelInput} ${variantLabel === 'labelBlack' ? styles.labelBlack: ''}`} >
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
            ${variant === 'scheduling' ? styles.scheduling : ''}
            `}
                 
            >

            </input>
        </label>
    )
}

export default Input;