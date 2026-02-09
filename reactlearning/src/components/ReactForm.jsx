import React from "react";
import { useForm } from "react-hook-form";

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    console.log("Submitting data");
    await new Promise((resolve) => setTimeout(() => resolve(), 3000));

    console.log("Succesfully data submitted", data);
  }

  //   Basic form Handling
  //   1. Create form element with onSubmit handler
  //   2. fields register
  //   3. onSubmit handler
  //   4. form validation
  //   5. Error Handling
  //   6. Styling Error Messages
  //  7. Disable submit button while submitting
  //  8. Prevent Multipe submitting using issubmitting state

  return (
    <div>
      <h1>React Hook Form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
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
            <p style={{ color: "red" }}>{errors.lastname.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="gender">Gender Selection: </label>
          <select
            id="gender"
            {...register("gender", { required: "Select gender is required" })}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && (
            <p style={{ color: "red" }}>{errors.gender.message}</p>
          )}
        </div>
        <input
          type="submit"
          disabled={isSubmitting}
          value={isSubmitting ? "Submitting..." : "Submit"}
        />
      </form>
    </div>
  );
};

export default ReactForm;
