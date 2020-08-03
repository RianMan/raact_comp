import React from 'react';
import styles from  './index.less';

function Button({children}){
    return <button className={styles.button}>
        {children}
    </button>
}

export default Button;