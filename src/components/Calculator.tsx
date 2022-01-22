import { useState } from "react";
import TemperatureScales from "../models/TemperatureScales";
import BoilingVerdict from "./BoilingVerdict";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  const [temperature, setTemperature] = useState<string>("0");
  const [scale, setScale] = useState<TemperatureScales>(TemperatureScales.celsius);

  const celsius =
    scale === TemperatureScales.fahrengeit ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === TemperatureScales.celsius ? tryConvert(temperature, toFahrenheit) : temperature;

  function onCelsiusChanged(celsius: string) {
    setScale(TemperatureScales.celsius);
    setTemperature(celsius);
  }

  function onFahrengeitChanged(fahrengeit: string) {
    setScale(TemperatureScales.fahrengeit);
    setTemperature(fahrengeit);
  }

  return (
    <div>
      <TemperatureInput
        scale={TemperatureScales.celsius}
        onTemperatureChange={onCelsiusChanged}
        temperature={celsius}
      />
      <TemperatureInput
        scale={TemperatureScales.fahrengeit}
        onTemperatureChange={onFahrengeitChanged}
        temperature={fahrenheit}
      />
      <BoilingVerdict celsius={celsius} />
    </div>
  );
}

function toCelsius(fahrenheit: number): number {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number): number {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature: string, convert: (temperature: number) => number): string {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

export default Calculator;
