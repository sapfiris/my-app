import TemperatureScales from "./TemperatureScales";

interface TemperatureInputProps {
  onTemperatureChange: (value: string) => void;
  scale: TemperatureScales;
  temperature: string;
}

export default TemperatureInputProps;
