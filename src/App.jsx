import "./App.css";
import { useContext } from "react";
import { FirstForm } from "./components/FirstForm";
import { SecondForm } from "./components/SecondForm";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { multiStepContext } from "./context/FormsContext";
import {DisplayForms} from './components/DisplayForms';
function App() {
  const { currentStep, finalData } = useContext(multiStepContext);
  const showSteps = (step) => {
    switch (step) {
      case 1:
        return <FirstForm />;
      case 2:
        return <SecondForm />;
      default:
        return;
    }
  };

  return (
    <div className="App">
      <div>
        <Stepper
          className="center-stepper"
          activeStep={currentStep - 1}
          orientation="horizontal"
        >
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>

      {showSteps(currentStep)}
      <DisplayForms/>
    </div>
  );
}

export default App;
