import TemperatureScales from "./TemperatureScales";

interface TemperatureInputProps {
  onTemperatureChange: Function;
  scale: TemperatureScales;
  temperature: string;
}

export default TemperatureInputProps;
