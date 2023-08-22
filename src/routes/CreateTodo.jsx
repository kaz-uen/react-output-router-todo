import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="form common-form flex-form">
      <h2>Create Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (todoTitle && todoContent) {
            dispatch(addTodo({ title: todoTitle, content: todoContent })); //フォームに値が入力されている場合のみDispatchする
            navigate("/");
          } else {
            alert("タイトルと詳細内容をどちらも入力してください。");
          }
        }}
      >
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          placeholder="タイトルを入力"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />

        <label htmlFor="content">詳細内容</label>
        <textarea
          id="content"
          type="text"
          placeholder="詳細を入力"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <div className="btn-center">
          <button className="default-btn color-reverse-btn">追加</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTodo;
