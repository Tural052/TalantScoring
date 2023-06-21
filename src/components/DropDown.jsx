import React, { useEffect, useState } from "react";
import styles from "../substage/substage.module.css";
import ArrowBotton from "../assets/arrow-bottom.svg";
import { useDispatch } from 'react-redux'
import { selectChange } from '../redux/selectedSlice'


const DropDown = ({ item, index }) => {
  const [selected, setSelected] = useState(false);
  const [render, setRender] = useState([]);

  const handleChange = (event) => {
    if(event.target.checked){
    setRender([...render, event.target.name]);
    }else{
      setRender(render.filter((item) => item !== event.target.name))
    }
  };

  const dispatch = useDispatch()
  useEffect(() => {
    setRender([])
  }, [index])
  window.addEventListener("click", (e) => {
    if (e.target.className !== `${styles.substageOption}`) {
      setSelected(false);
    }
  });
  return (
    <div>
      <label
        className={`${styles.substageOption}`}
        onClick={() => {
          setSelected(!selected);
        }}
      >

        {item.option[0] && item.option[0].name}
        <span className={selected ? `${styles.iconTop}` : `${styles.iconBottom}`}>
          <img src={ArrowBotton} alt="Arrowbotton" />
        </span>
      </label>
      <ul
        className={
          selected ? `${styles.selectedBox}` : `${styles.noneSelectBox}`
        }
      >
        {
          item.option && item.option.map((items) => (
            <li key={items.id}>
              {items.name}
              <input
                type="checkbox"
                name={items.name}
                id={items.name}
                onChange={
                  item.question !== "Hansı program növlərini bilirsiniz?"
                    ? handleChange
                    : () => {
                     console.log("aa")
                      dispatch(selectChange({ id: items.id, name: items.name, selected: items.selected }))
                    }
                }

              />
            </li>
          ))}
      </ul>
      {render && item.question !== "Hansı program növlərini bilirsiniz?" &&
        render.map((item, index) => (
          <div key={item} className={`${styles.addExperinece}`}>
            <p>{item} proqramı üzrə təcrübənizi qeyd edin.*</p>
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
        ))}
    </div>
  );
};

export default DropDown;
