import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  const [temperature, setTemperature] = useState(0);
  const [scale, setScale] = useState("c");

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  function onCelsiusChanged(celsius) {
    setScale("c");
    setTemperature(celsius);
  }

  function onFahrengeitChanged(fahrengeit) {
    setScale("f");
    setTemperature(fahrengeit);
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        onTemperatureChange={onCelsiusChanged}
        temperature={celsius}
      />
      <TemperatureInput
        scale="f"
        onTemperatureChange={onFahrengeitChanged}
        temperature={fahrenheit}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;
