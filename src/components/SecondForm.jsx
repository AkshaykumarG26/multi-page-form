import { TextField, Button } from "@material-ui/core";
import { useContext } from "react";
import { multiStepContext } from "../context/FormsContext";

export const SecondForm = () => {
  const { setCurrentStep, submitData, handleChange } =
    useContext(multiStepContext);

  return (
    <>
      <div>
        <TextField
          onChange={handleChange}
          label="State Of Residatnce"
          name="state"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          onChange={handleChange}
          label="Address"
          name="address"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>

      <div>
        <TextField
          onChange={handleChange}
          label="Pincode"
          name="pincode"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>
      <div>
        <Button
          onClick={() => setCurrentStep(1)}
          variant="contained"
          color="secondary"
        >
          Back
        </Button>
        <span> </span>
        <Button onClick={submitData} variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </>
  );
};
