import React, { useState } from "react";

// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

const App = () => {
  const [color, setColor] = useState({
    row1: ["0000A0", "B22222", "006400"],
    row2: ["DC143C", "0000FF", "008000"],
    row3: ["FF0000", "00FF00", "ADD8E6"],
  });

  const [loading, setLoading] = useState(0);

  const [choise, setChoise] = useState({ blue: 0, red: 0, green: 0 });
  const [final, setFinal] = useState();

  const blueColor = (e) => {
    setChoise({ ...choise, blue: e });
    setLoading(1);
  };
  const redColor = (e) => {
    setChoise({ ...choise, red: e });
    setLoading(2);
  };
  const greenColor = (e) => {
    setChoise({ ...choise, green: e });
    setLoading(3);
  };
  const lastChoise = (e) => {
    setFinal(e);
    setLoading(4);
  };

  return (
    <div className="container App colors">
      <h1>Choose a green one</h1>
      {loading === 0 && (
        <div className="row">
          {color.row1.map((color, i) => {
            return (
              <div
                className="col-sm-4"
                onClick={(e) => blueColor(color)}
                style={{ backgroundColor: "#" + color }}
                key={i}
              ></div>
            );
          })}
        </div>
      )}

      {loading === 1 && (
        <div className="row">
          {color.row2.map((color, i) => {
            return (
              <div
                className="col-sm-4"
                onClick={(e) => redColor(color)}
                style={{ backgroundColor: "#" + color }}
                key={i}
              ></div>
            );
          })}
        </div>
      )}

      {loading === 2 && (
        <div className="row">
          {color.row3.map((color, i) => {
            return (
              <div
                className="col-sm-4"
                onClick={(e) => greenColor(color)}
                style={{ backgroundColor: "#" + color }}
                key={i}
              ></div>
            );
          })}
        </div>
      )}

      {loading === 3 && (
        <div className="row">
          <h2 className="col-sm-12">Choose the greenest one</h2>
          <div
            className="col-sm-4"
            onClick={(e) => lastChoise(choise.blue)}
            style={{ backgroundColor: "#" + choise.blue }}
          ></div>
          <div
            className="col-sm-4"
            onClick={(e) => lastChoise(choise.red)}
            style={{ backgroundColor: "#" + choise.red }}
          ></div>
          <div
            className="col-sm-4"
            onClick={(e) => lastChoise(choise.green)}
            style={{ backgroundColor: "#" + choise.green }}
          ></div>
        </div>
      )}

      {loading === 4 && (
        <div className="row">
          <h2>This green greener than others</h2>
          <div
            className="col-sm-12"
            style={{ backgroundColor: "#" + final }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default App;
