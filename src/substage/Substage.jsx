import React, { useState } from "react";
import styles from "./substage.module.css";
import DropDown from "../components/DropDown";
import RightIcon from "../assets/rightIcon.svg";
import LeftIcon from "../assets/leftIcon.svg";
import { useSelector } from "react-redux";
import { selectTypeAll } from "../redux/typeSlice";
import { selectAllData } from "../redux/selectedSlice";
import AddExperince from "../components/AddExperince";
import NextIcon from "../assets/next-icon.svg";
import BackIcon from "../assets/back-icon.svg";

const Substage = ({ id }) => {
  const selectAllType = useSelector(selectTypeAll);
  const selectedData = selectAllType.find((item) => item.id === id + 1);
  const allData = useSelector(selectAllData);
  const selectCatagory = allData.filter((item) => item.selected === true);
  const selectCatagorySort = selectCatagory.sort((a, b) => a.id - b.id);
  const [index, setIndex] = useState(1);
  const [addIndex, setAddIndex] = useState([1]);
  const addClick = () => {
    setAddIndex([...addIndex, addIndex.length + 1]);
  };
  const nextPrev = () => {
    if (selectCatagorySort.length > index) {
      setIndex(index + 1);
    }
  };
  const backPrev = () => {
    if (index !== 1) {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <div className={`${styles.substageContainer}`}>
        <h2 className={`${styles.substageHeaderContent}`}>
          {selectedData ? selectedData.name : null}
        </h2>
        <div className={`${styles.loadingBox}`}>
          <div
            className={`${styles.loadingBar}`}
            style={{ width: `${(index / selectCatagorySort.length) * 100}%` }}
          ></div>
        </div>
        {index === 1 ? (
          <div className={`${styles.substageContent}`}>
            {selectedData
              ? selectedData.substage.questions.map((item) => (
                <div className={`${styles.substageQuestion}`} key={item.id}>
                  <p className={`${styles.substageQuestionText}`}>
                    {item.question}
                  </p>
                  <DropDown item={item} />
                </div>
              ))
              : null}
            {selectCatagorySort[index - 1] ? (
              <>
                <h2>
                  <img src={BackIcon} alt="back" onClick={backPrev} />
                  {selectCatagorySort[index - 1].name}
                  <img src={NextIcon} alt="next" onClick={nextPrev} />
                </h2>
                <div className={`${styles.substageQuestion}`}>
                  <p>{selectCatagorySort[index - 1].question}</p>
                  {selectCatagorySort[index - 1].option && (
                    <DropDown
                      item={selectCatagorySort[index - 1]}
                      index={index}
                    />
                  )}
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <div className={`${styles.substageContent}`}>
            <h2>
              <img src={BackIcon} alt="back" onClick={backPrev} />
              {selectCatagorySort[index - 1].name}
              <img src={NextIcon} alt="next" onClick={nextPrev} />
            </h2>

            <div className={`${styles.substageQuestion}`}>
              <p>{selectCatagorySort[index - 1].question}</p>
              {index !== 4 && selectCatagorySort[index - 1].option ? (
                <DropDown item={selectCatagorySort[index - 1]} index={index} />
              ) : (
                <>
                  <button className={`${styles.addButton}`} onClick={addClick}>
                    Əlavə et +
                  </button>
                  {addIndex.map((item) => (
                    <AddExperince index={item} key={item} />
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="buttonBox">
        <button onClick={backPrev}>
          <img src={LeftIcon} alt="left" />
          Geri
        </button>
        <button onClick={nextPrev}>
          İrəli
          <img src={RightIcon} alt="right" />
        </button>
      </div>
    </>
  );
};

export default Substage;
