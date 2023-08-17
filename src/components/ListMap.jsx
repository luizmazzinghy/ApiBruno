import React from "react";
import Home from "../routes/home";

const ListMap = ({ itens }) => {
  return (
    <div>
      <div>
        <h4>{itens.title}</h4>
        <img src={itens.thumbnail} alt="" />
        <h4>{itens.price}</h4>
        <button>Detalhes</button>
      </div>
    </div>
  );
};

export default ListMap;
