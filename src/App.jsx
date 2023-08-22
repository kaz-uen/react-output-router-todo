import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateTodo from "./routes/CreateTodo";
import EditTodo from "./routes/EditTodo";
import ListTodo from "./routes/ListTodo";
import DetailTodo from "./routes/DetailTodo";
import DetailTodoIndex from "./routes/DetailTodoIndex";
import Notfound from "./routes/Notfound";
import Header from "./routes/Header";
import Footer from "./routes/Footer";

const App = () => {
  return (
    <>
      {/* <h1>Todo List</h1> */}
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<ListTodo />}>
            <Route index element={<DetailTodoIndex />} />
            {/* <Route path=":todoId" element={<DetailTodo />} /> */}
            <Route path={`/detail/:todoId`} element={<DetailTodo />} />
          </Route>
          <Route path="/create" element={<CreateTodo />} />
          <Route path={`/edit/:todoId`} element={<EditTodo />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
