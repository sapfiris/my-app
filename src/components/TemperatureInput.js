function TemperatureInput(props) {
  function temperatureHandler(e) {
    props.onTemperatureChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>Введите температуру в градусах {scaleNames[props.scale]}:</legend>
      <input value={props.temperature} onChange={temperatureHandler} />
    </fieldset>
  );
}

const scaleNames = {
    c: 'Цельсия',
    f: 'Фаренгейта'
  };

export default TemperatureInput;
