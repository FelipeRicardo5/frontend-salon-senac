import styles from './Button.module.css'

const Button = ({ onClick, text, type = 'button', variant = 'default' }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className=
        {`${styles.btn} 
        ${variant === 'larger' ? styles.larger : ''} 
        ${variant === 'medium' ? styles.secondary : ''}`}
        type={type}
      >
        {text}
      </button>
    </div>
  );
};


export default Button;