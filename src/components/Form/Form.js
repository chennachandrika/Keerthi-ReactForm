import { useState, useEffect } from "react";
import Input from "../Input/Input";
import "../../styles.css";

function Form() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (Object.keys(formErrors).length === 0) {
      window.location.href = "/home";
    }
    return errors;
  };

  return (
    <div className="container">
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <Input
            labelText={"Username"}
            inputType={"text"}
            inputName={"username"}
            inputValue={formValues.username}
            inputHandler={handleChange}
            errorText={formErrors.username}
          />
          <Input
            labelText={"Email"}
            inputType={"text"}
            inputName={"email"}
            inputValue={formValues.email}
            inputHandler={handleChange}
            errorText={formErrors.email}
          />
          <Input
            labelText={"Password"}
            inputType={"password"}
            inputName={"password"}
            inputValue={formValues.password}
            inputHandler={handleChange}
            errorText={formErrors.password}
          />
          <button
           
            className="button-submit"
            disabled={
              !formValues.username && !formValues.email && !formValues.password
            }
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
