import React from "react";
import { useDispatch } from "react-redux";
import { clearTodo } from "../features/todo/TodoSlice";
import { closeModal } from "../features/modal/ModalSlice";

const Modal = () => {

  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
        <div className="modal">
            <h4>タスクをすべて削除しますか？</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" onClick={() => {
                    dispatch(clearTodo());
                    dispatch(closeModal());
                }}>
                    はい
                </button>
                <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>いいえ</button>
            </div>
        </div>
    </aside>
  )
};

export default Modal;
