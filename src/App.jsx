import "./App.css";
import React from "react";
import Card from "./components/layout/Card";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";

function App(props) {
  return (
    <div className="App">
      <Card titulo="#03 - Comunicação Indireta" color="#bcff03">
        <Input></Input>
      </Card>
      <Card titulo="#02 - Comunicação Indireta" color="#008cff">
        <Super></Super>
      </Card>
      <Card titulo="#01 - Comunicação Direta" color="#FA6900">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
    </div>
  );
}
export default App;
