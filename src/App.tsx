import { useForm, SubmitHandler } from "react-hook-form";
import React, { useContext, useEffect } from "react";
import StoreContext from "./store/store-context";
import "./App.css";

function App() {
  const ctx = useContext(StoreContext);
  const { register, handleSubmit } = useForm();
  // useEffect(() => {
  //   console.log(ctx);
  // }, []);
  type Inputs = {
    example: string;
    email: string;
    number: number;
    checkbox: boolean;
  };
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // console.log("JOOOO", ctx);
  return (
    <div className="App">
      <h2>Typescript starter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example")} type="text" />
        <input {...register("email")} type="email" />
        <input {...register("number")} type="number" />
        <input {...register("checkbox")} type="checkbox" />
        <input type="submit" />
      </form>
      {JSON.stringify(ctx.items)}
    </div>
  );
}

export default App;
