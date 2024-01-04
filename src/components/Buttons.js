import React from "react";
import "./styles/Buttons.css";
// import CALCULATOR_BUTTONS from "./CalculatorButtons";

// Event listener to handle the "Enter" key for triggering the "=" button click
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equalbtn").click();
  }
});

const Buttons = ({ inputHandler, clearInput, backspace, changePlusMinus, calculateAns }) => {
  return (
    <div className="show-btn">
      {/* Mathematical operation buttons */}
      <button className="btn exp" onClick={inputHandler}>
        ^
      </button>
      <button className="btn exp" onClick={inputHandler}>
        (
      </button>
      <button className="btn exp" onClick={inputHandler}>
        )
      </button>
      <button className="btn exp" onClick={inputHandler}>
        √
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x<sup>2</sup>
      </button>

      {/* Clear and delete buttons */}
      <button className="btn clr" onClick={clearInput}>
        AC
      </button>
      <button className="btn clr" onClick={backspace}>
        ⌫
      </button>

      {/* Additional mathematical operations */}
      <button className="btn exp" onClick={inputHandler}>
        log
      </button>
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>
      <button className="btn exp" onClick={inputHandler}>
        %
      </button>

      {/* Numeric buttons */}
      <button className="btn" onClick={inputHandler}>
        7
      </button>
      <button className="btn" onClick={inputHandler}>
        8
      </button>
      <button className="btn" onClick={inputHandler}>
        9
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x
      </button>
      <button className="btn exp" onClick={inputHandler}>
        x<sup>3</sup>
      </button>
      <button className="btn" onClick={inputHandler}>
        4
      </button>
      <button className="btn" onClick={inputHandler}>
        5
      </button>
      <button className="btn" onClick={inputHandler}>
        6
      </button>
      <button className="btn exp" onClick={inputHandler}>
        -
      </button>
      <button className="btn exp" onClick={inputHandler}>
        <sup>3</sup>√
      </button>
      <button className="btn" onClick={inputHandler}>
        1
      </button>
      <button className="btn" onClick={inputHandler}>
        2
      </button>
      <button className="btn" onClick={inputHandler}>
        3
      </button>
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>
      <button className="btn exp" onClick={inputHandler}>
        !
      </button>
      <button className="btn exp" onClick={changePlusMinus}>
        ±
      </button>

      {/* Zero, decimal point, and equals button */}
      <button className="btn" onClick={inputHandler}>
        0
      </button>
      <button className="btn exp" onClick={inputHandler}>
        .
      </button>
      <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
