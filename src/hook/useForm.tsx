import { useState } from "react";

interface defaultsType {
  name: string;
  email: string;
  message: string;
}

const useForm = (defaults: defaultsType) => {
  const [values, setValues] = useState(defaults);
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const clearValues = () => {
    setValues(defaults);
  };

  return { values, updateValue, clearValues };
};

export default useForm;
