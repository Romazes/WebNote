import { useState } from "react";

const HandlingForm = (initialFieldValues, validate) => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const fieldValue = {[name] : value}
    setValues({
      ...values,
      ...fieldValue,
    });
    validate(fieldValue)
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
  };
};

export default HandlingForm;
