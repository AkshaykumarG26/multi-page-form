import React, { useState } from "react";
import App from "../App";

export const multiStepContext = React.createContext();


const data = {
    name:"",
    age: 0,
    dob: '',
    state: '',
    address: '',
    pincode: 0
}


export const FormsContext = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState(data);
  const [finalData, setFinalData] = useState([]);

  const submitData = () => {
        // console.log(userData)
        setFinalData(finalData => [...finalData, userData])
        setUserData(data)

        // console.log(userData)
        setCurrentStep(1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
          handleChange,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};
