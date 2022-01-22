import React from "react";
import TemperatureInputProps from "../models/TemperatureInputProps";

function TemperatureInput(props: TemperatureInputProps) {
  function temperatureHandler(e: React.ChangeEvent<HTMLInputElement>) {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Введите температуру в градусах {props.scale}:</legend>
      <input value={props.temperature} onChange={temperatureHandler} />
    </fieldset>
  );
}

export default TemperatureInput;
