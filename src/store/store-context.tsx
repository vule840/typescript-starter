import axios from "axios";
import React from "react";

// export type items = {
//   items: any[];
// };

const StoreContext = React.createContext<Items>({
  items: [],
});
interface Items {
  items: any[];
}
export const ContextApiProvider = (props: any) => {
  const [todo, addTodo] = React.useState<Items[]>([]);
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(function (response) {
        addTodo(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  return (
    <StoreContext.Provider
      value={{
        items: todo,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContext;
