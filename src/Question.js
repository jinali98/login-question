import React, { useState } from "react";
import {
  AiFillPropertySafety,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const Question = ({ title, info }) => {
  // const [icon, setIcon] = useState(AiOutlinePlus);
  const [showInfo, setShowInfo] = useState(false);

  const changeIconHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={changeIconHandler}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;
