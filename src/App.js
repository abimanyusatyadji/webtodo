import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [form, setForm] = useState({
    todo: "",
    status: false,
  });

  const resetInput = () => {
    setForm({
      todo: "",
      status: false,
    });
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      todo: e.target.value,
      status: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.index || form.index === 0) {
      const newTodo = todoList.map((e, i) => {
        if (i === form.index) {
          return form;
        } else {
          return e;
        }
      });
      setTodoList(newTodo);
    } else {
      setTodoList([...todoList, form]);
    }
    resetInput();
  };

  const handleCheck = (index) => {
    const newTodo = todoList.map((e, i) => {
      if (i === index) {
        return {
          todo: e.todo,
          status: true,
        };
      } else {
        return e;
      }
    });
    setTodoList(newTodo);
  };

  const handleDelete = (index) => {
    const newTodo = todoList.filter((e, i) => {
      if (i !== index) {
        return e;
      }
    });
    setTodoList(newTodo);
  };
  const handleUpdate = (index) => {
    const detailTodo = {
      index,
      ...todoList[index],
    };
    setForm(detailTodo);
  };
  return (
    <div className="App">
      <div className="jumbotron">
        <h1>Aplikasi Daftar Kegiatan</h1>
        <form className="form" method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            value={form.todo}
            name="todo"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="content">
        {todoList.map((e, i) => (
          <div key={i} className="card">
            <div className="action">
              <input type="checkbox" onChange={() => handleCheck(i)}></input>
            </div>
            <div className="text">{e.todo}</div>
            <div className="button-action">
              <button className="btn-update" onClick={() => handleUpdate(i)}>
                Update
              </button>
              <button className="btn-delete" onClick={() => handleDelete(i)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
