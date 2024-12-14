import React from 'react';
import styles from './Toast.module.css';


function Toast({ message, type, closeToast }) {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span>{message}</span>
      <button className={styles.closeButton} onClick={closeToast}>
        &times;
      </button>
    </div>
  );
}

export default Toast;
