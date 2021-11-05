import "./App.css";
import React from "react";
import Card from "./components/layout/Card";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";

function App(props) {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
            <Card titulo="#04 - Contador" color="#ffad87">
            <Contador passo={10} valor={100}></Contador>
            </Card>
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

    </div>
  );
}
export default App;
