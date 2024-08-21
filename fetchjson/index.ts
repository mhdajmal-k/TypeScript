import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
interface todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then((response) => {
  const todo = response.data as todo;
  console.log(todo.completed);
  console.log(todo.title);
  console.log(todo.id);
});
