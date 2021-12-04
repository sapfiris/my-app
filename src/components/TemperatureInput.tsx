import TemperatureInputProps from "../models/TemperatureInputProps";

function TemperatureInput(props: TemperatureInputProps) {
  function temperatureHandler(e: any) {
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
