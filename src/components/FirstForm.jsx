import { Button, TextField } from "@material-ui/core";
import { useContext } from "react";
import { multiStepContext } from "../context/FormsContext";

export const FirstForm = () => {


    const { setCurrentStep, handleChange } =
      useContext(multiStepContext);
      
  return (
    <>
      <div>
        <TextField
          onChange={handleChange}
          label="Name"
          name="name"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>
      <div>
        <TextField
          onChange={handleChange}
          label="Age"
          name="age"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>

      <div>
        <TextField
          onChange={handleChange}
          label="Date Of Birth"
          name="dob"
          margin="dense"
          variant="standard"
          color="secondary"
        />
      </div>
      <div>
        <Button
          onClick={() => setCurrentStep(2)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </div>
    </>
  );
};
