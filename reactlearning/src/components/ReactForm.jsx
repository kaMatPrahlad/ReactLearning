import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitting data", data);
  };
  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            autoComplete="given-name"
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 4,
                message: "Name must be at least 4 characters long",
              },
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="middlename">Middle Name:</label>
          <input
            id="middlename"
            type="text"
            placeholder="Enter your middlename"
            {...register("middlename", { required: "Middle name is required" })}
          />
          {errors.middlename && (
            <p style={{ color: "red" }}>{errors.middlename.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            id="lastname"
            type="text"
            placeholder="Enter your lastname"
            {...register("lastname", {
              required: "Last name is required",
              pattern: {
                value: /^[A-Za-z]+$/i,
                message: "Last name must contain only letters",
              },
            })}
          />
          {errors.lastname && (
            <p style={{ color: "red" }}>{errors.lastname.required}</p>
          )}
        </div>
        <div>
          <label htmlFor="gender">Gender Selection: </label>
          <select id="gender" {...register("gender")}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReactForm;
