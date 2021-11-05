import React from "react";
import Filho from "./Filho";

function Pai(props) {
  return (
    <div>
      <Filho {...props}>Pedro</Filho> 
      <Filho sobrenome={props.sobrenome}>Maria</Filho>
      <Filho sobrenome="Silva">João</Filho>
    </div>
  );
}
export default Pai;