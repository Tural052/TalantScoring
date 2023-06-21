import React, { useState } from 'react'
import styles from '../substage/substage.module.css'
const AddExperince = ({index}) => {
    const [item,setItem] = useState("")
    return (
        <div className={`${styles.addBox}`}>
            <input type="text" value={item} onChange={(e) => setItem(e.target.value)}/>
            programı üzrə təcrübənizi qeyd edin?*
            <div>
              <label htmlFor={index + "ilkin"} >
                İlkin <input type="radio" name={item} id={index + "ilkin"} />
              </label>
              <label htmlFor={index + "orta"}>
                Orta <input type="radio" name={item} id={index + "orta"} />
              </label>
              <label htmlFor={index + "yuksek"}>
                İrəli <input type="radio" name={item} id={index + "yuksek"} />
              </label>
            </div>
        </div>
    )
}

export default AddExperince