import "./App.css";
import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
