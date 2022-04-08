import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <div>
      <div className="flex flex-wrap mb-28 justify-center w-full">
        <form action="#" onSubmit={handleSubmit}>
          {props.edit ? (
            <>
              <div className="flex flex-wrap">
                <input
                  type="text"
                  className="w-[380px] md:w-[400px] justify-center lg:w-[300px] py-[3px] px-[10px] border-2 border-red-600 text-xl bg-white"
                  value={input}
                  name="text"
                  placeholder="Update Data"
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button className="mx-[10px] bg-blue-500 px-[8px] py-[8px] text-white hover:bg-blue-500">Update Data</button>
              </div>
            </>
          ) : (
            <>
              <input type="text" className="w-[300px] py-[3px] px-[10px] border-2 text-xl bg-white" value={input} name="text" placeholder="Masukan Data" onChange={handleChange} ref={inputRef} />
              <button className="mx-[10px] bg-blue-500 px-[8px] py-[8px] text-white hover:bg-blue-700">Tambah Data</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
