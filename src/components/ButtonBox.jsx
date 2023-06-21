import React from 'react'
import RightIcon from '../assets/rightIcon.svg'
import LeftIcon from '../assets/leftIcon.svg'

import styles from '../substage/substage.module.css'
const ButtonBox = () => {
    return (
        <div className={`${styles.buttonBox}`}>
            <button>
                <img src={LeftIcon} alt='left' />
                Geri
            </button>
            <button>
                Növbəti
                <img src={RightIcon} alt='right' />
            </button>
        </div>
    )
}

export default ButtonBox