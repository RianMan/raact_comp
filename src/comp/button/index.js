import React from 'react';
import styles from  './index.less';

function Button({onClick, children}){
    return <button onClick={onClick}  className={styles.button}>
        {children}
    </button>
}

export default Button;