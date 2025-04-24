import React from 'react';
import styles from './Controls.module.css';

const Controls = ({ deleteAll }) => {
  return (

    <div className={StyleSheet.controls}>
        <button onClick={deleteAll}>Butun Todolari Sil</button>
    </div>

)
}

export default Controls