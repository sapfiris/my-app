import BoilingVerdictProps from "../models/BoilingVerdictProps";

function BoilingVerdict(props: BoilingVerdictProps) {
    if (parseFloat(props.celsius) >= 100) {
      return <p>Вода закипит.</p>;
    }
    return <p>Вода не закипит.</p>;
  }

export default BoilingVerdict;
