import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { todoDataSliceActions } from "./Store/todoRedux";

const todoData = [
  {
    id: 1,
    title: "Finish Homework",
    description: "Complete the math and science assignments by tonight.",
  },
  {
    id: 2,
    title: "Buy Groceries",
    description:
      "Get eggs, milk, bread, and vegetables from the grocery store.",
  },
  {
    id: 3,
    title: "Call Mom",
    description: "Check in with Mom and see how she's doing.",
  },

  {
    id: 4,
    title: "Finish Homework",
    description: "Complete the math and science assignments by tonight.",
  },
  {
    id: 5,
    title: "Buy Groceries",
    description:
      "Get eggs, milk, bread, and vegetables from the grocery store.",
  },
  {
    id: 6,
    title: "Call Mom",
    description: "Check in with Mom and see how she's doing.",
  },
];

function App() {
  const dispatch = useDispatch();
  const stateTodo = useSelector(state=>state);
  console.log(stateTodo)

  const handle = () => {
    dispatch(todoDataSliceActions.addTodo(todoData));
  };

  const handledel = () => {
    dispatch(todoDataSliceActions.deleteTodo("stringdelet"));
  };

  return (
    <>
      <button onClick={handle}>Add</button>
      <button onClick={handledel}>del</button>
      <TodoForm />
      <TodoList />
    </>
  );
}

export default App;
