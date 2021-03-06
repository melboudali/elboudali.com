import React, { useState } from "react";
import { defaultsType } from "../types/hooks";

const useForm = (defaults: defaultsType) => {
  const [values, setValues] = useState(defaults);

  const updateValue = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const clearValues = () => {
    setValues(defaults);
  };

  return { values, updateValue, clearValues };
};

export default useForm;
