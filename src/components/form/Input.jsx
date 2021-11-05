import React, { useState } from "react";

function Input(props) {
  const [nome, setNome] = useState("");

  return (
    <>
      <h3>{nome}</h3>
      <input type="text" value={nome}
        onChange={e => setNome(e.target.value)} />
    </>
  );
}
export default Input;
