import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const DetailTodo = () => {
  const { todoId } = useParams();
  const [ todo, setTodo ] = useState("");
  const { todoItemsData } = useSelector((store) => store.todo);

  useEffect(() => {
    todoItemsData.map((item) => {
        if (item.id == todoId) {
            setTodo(item);
        };
    });
  }, [ todoId ])

  return (
    <div className="content">
        <p className="content-number">ID: {todo.id}</p>
        <h3 className="content-title">{todo.title}</h3>
        <div className="content-body">
            <p>内容: <br />{todo.content}</p>
        </div>
    </div>
  )

};

export default DetailTodo;
