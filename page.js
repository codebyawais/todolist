'use client'
import Image from "next/image";
import React,{useState} from "react";

export default function Home() {
  const [todos, setTodos]=useState([{id:1, title:"awais"},{id:2,title:"ahsan"}])
  return (
    <div>

      <div className="bg-zinc-950 min-h-[100vh] h-fit-content  flex  justify-center items-center">

        <div className="bg-white h-[50vh] min-h-300px  w-[100vh] min-w-[200px]">
          <h1 className="font-bold text-xl mt-6 ml-6">To-Do List</h1>

          <div className="flex  items-center  mt-2 space-x-2 ">
            <input type="text" placeholder="Enter the Todo Text" className="bg-gray-300 
               rounded-3xl h-[40px] w-[300px] ml-6 mt-4 border border-red-600" />
            <button className="bg-zinc-700 text-white h-[45px]  
            mt-4 border border-red-600 w-[100px] rounded-3xl" >Add +</button>
         
         {/* list of todo using map function */}
         {todos.map((todo)=>{return (<h1>{todo.id},{todo.title}</h1>)})}
          </div>
        </div>
      </div>

    </div>
  );
}
