import React from "react";

function Buttons(mainProps) {
  return (
    <div className="button-container">
      <div className="button-row">
        <button
          id="clear"
          value="clear"
          className="buttons"
          onClick={() => mainProps.handleClick("clear")}
        >
          C
        </button>
        <button
          id="negetive"
          value="negetive"
          className="buttons"
          onClick={() => mainProps.handleClick("negative")}
        >
          -/+
        </button>
        <button
          id="percent"
          value="percent"
          className="buttons"
          onClick={() => mainProps.handleClick("percent")}
        >
          %
        </button>
        <button
          id="divide"
          value="divide"
          className="buttons"
          onClick={() => mainProps.handleClick("/")}
        >
          /
        </button>
      </div>
      <div className="button-row">
        <button
          id="seven"
          value="seven"
          className="buttons"
          onClick={() => mainProps.handleClick("7")}
        >
          7
        </button>
        <button
          id="eight"
          value="eight"
          className="buttons"
          onClick={() => mainProps.handleClick("8")}
        >
          8
        </button>
        <button
          id="nine"
          value="nine"
          className="buttons"
          onClick={() => mainProps.handleClick("9")}
        >
          9
        </button>
        <button
          id="multiply"
          value="multiply"
          className="buttons"
          onClick={() => mainProps.handleClick("*")}
        >
          *
        </button>
      </div>
      <div className="button-row">
        <button
          id="four"
          value="four"
          className="buttons"
          onClick={() => mainProps.handleClick("4")}
        >
          4
        </button>
        <button
          id="five"
          value="five"
          className="buttons"
          onClick={() => mainProps.handleClick("5")}
        >
          5
        </button>
        <button
          id="six"
          value="six"
          className="buttons"
          onClick={() => mainProps.handleClick("6")}
        >
          6
        </button>
        <button
          id="subtract"
          value="subtract"
          className="buttons"
          onClick={() => mainProps.handleClick("-")}
        >
          -
        </button>
      </div>
      <div className="button-row">
        <button
          id="one"
          value="onw"
          className="buttons"
          onClick={() => mainProps.handleClick("1")}
        >
          1
        </button>
        <button
          id="two"
          value="two"
          className="buttons"
          onClick={() => mainProps.handleClick("2")}
        >
          2
        </button>
        <button
          id="three"
          value="three"
          className="buttons"
          onClick={() => mainProps.handleClick("3")}
        >
          3
        </button>
        <button
          id="add"
          value="add"
          className="buttons"
          onClick={() => mainProps.handleClick("+")}
        >
          +
        </button>
      </div>
      <div className="button-row">
        <button
          id="zero"
          value="zero"
          className="buttons"
          onClick={() => mainProps.handleClick("0")}
        >
          0
        </button>
        <button
          id="decimal"
          value="decimal"
          className="buttons"
          onClick={() => mainProps.handleClick(".")}
        >
          .
        </button>
        <button
          id="equals"
          value="equals"
          className="buttons"
          onClick={() => mainProps.handleClick("=")}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Buttons;

