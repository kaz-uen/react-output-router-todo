import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/TodoSlice";

const EditTodo = () => {
  const { todoId } = useParams();
  const [todo, setTodo] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateContent, setUpdateContent] = useState("");
  const { todoItemsData } = useSelector((store) => store.todo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    todoItemsData.map((item) => {
      if (item.id == todoId) {
        setTodo(item);
        setUpdateTitle(item.title);
        setUpdateContent(item.content);
      }
    });
  }, [todoId]);

  return (
    <div className="form common-form flex-form">
      <h2>Edit Todo</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (updateTitle && updateContent) {
            dispatch(
              updateTodo({
                id: todo.id,
                title: updateTitle,
                content: updateContent,
              })
            );
            navigate("/");
          } else {
            alert("タスクを正しく入力してください。");
          }
        }}
      >
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          value={updateTitle}
          onChange={(e) => setUpdateTitle(e.target.value)}
        />

        <label htmlFor="content">詳細内容</label>
        <textarea
          id="content"
          type="text"
          value={updateContent}
          onChange={(e) => setUpdateContent(e.target.value)}
        />

        <div className="btn-center">
          <button className="default-btn color-reverse-btn">更新</button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
