import React from "react";

function PassoForm(props) {
  return (
    <div>
      <label forhtml="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.onPassoChange(+e.target.value)}
      />
    </div>
  );
}

export default PassoForm;