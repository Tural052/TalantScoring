import React from "react";
import "./App.css";
import Icon from "./assets/icon.svg";
import Programing from "./assets/programming.svg";
import Substage from "./substage/Substage";
import ButtonBox from "./components/ButtonBox";

const data = [
  {
    id: 1,
    name: "Təhsil",
    active: false,
  },
  {
    id: 2,
    name: "Dil Bilikləri",
    active: false,
  },
  {
    id: 3,
    name: "Xüsusi bacarıqlar",
    active: false,
  },
  {
    id: 4,
    name: "Idman",
    active: false,
  },
  {
    id: 5,
    name: "Proqram bilikləri",
    active: true,
  },
];

const App = () => {
  const index = data.findIndex((item) => item.active === true);

  return (
    <div className="contianer">
      <div className="left">
        <h1>{<img src={Icon} alt="icon" />}</h1>
        <p>Süni intelekt sistemi</p>
        <p>
          Bu formu doldurduqdan sonra öz yaşıdlarınız arasında ən yaxşı hansı
          faizlikdə olduğunuzu müəyyən edə biləcəksiniz.
        </p>
      </div>
      <div className="right">
        <ul className="active">
          {data.map((item) => (
            <li key={item.id} className={item.active ? "listActive" : "list"}>
              {item.active ? <span className="number">{item.id}.</span> : null}
              <h2>{item.name}</h2>
            </li>
          ))}
        </ul>
        <div>
          <Substage id={index} />
        </div>
      </div>
      <img src={Programing} alt="progarming" />
    </div>
  );
};

export default App;
