import { useForm, SubmitHandler } from "react-hook-form";
import React, { useContext, useEffect } from "react";
import StoreContext from "../store/store-context";

const ReactForm = () => {
  const ctx = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  type Inputs = {
    example: string;
    email: string;
    number: number;
    checkbox: boolean;
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  console.log(watch("example"));
  console.log(errors);
  // console.log("JOOOO", ctx);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example", { required: true })} type="text" />
        {errors.example && <p>Required man</p>}
        <input {...register("email")} type="email" />
        <input
          {...register("number", {
            min: { message: "jo min value is 3", value: 3 },
          })}
          type="number"
        />
        {errors.number && errors.number.message}
        <input {...register("checkbox")} type="checkbox" />
        <input type="submit" />
      </form>
      {JSON.stringify(ctx.items)}
    </div>
  );
};

export default ReactForm;
